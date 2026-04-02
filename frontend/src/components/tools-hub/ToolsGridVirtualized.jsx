import { useMemo, useRef, useEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import ToolCard from './ToolCard';
import './ToolsGrid.css';

/**
 * Virtualized Tools Grid - High Performance Component
 * Renders only visible tool cards in viewport for optimal performance
 * Handles 100+ tools without frame drops
 */
export default function ToolsGridVirtualized({ tools, searchQuery }) {
  const parentRef = useRef(null);

  // Calculate grid columns based on viewport width
  const columns = useMemo(() => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 2;  // Mobile
    if (width < 768) return 2;  // Large mobile
    if (width < 1024) return 3; // Tablet
    if (width < 1280) return 4; // Desktop
    return 5; // Large desktop
  }, []);

  // Create virtualized rows (each row contains {columns} tools)
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < tools.length; i += columns) {
      result.push(tools.slice(i, i + columns));
    }
    return result;
  }, [tools, columns]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280, // Estimated row height (card height + gap)
    overscan: 2, // Render 2 extra rows above/below viewport
  });

  if (tools.length === 0) {
    return (
      <div className="tools-grid__empty container">
        <div className="tools-grid__empty-icon">🔍</div>
        <h3 className="tools-grid__empty-title">No tools found</h3>
        <p className="tools-grid__empty-text">
          Try searching with different keywords like "merge", "convert", or "compress"
        </p>
      </div>
    );
  }

  return (
    <section className="tools-grid-section" id="tools-grid">
      <div className="container">
        <div className="tools-grid__header">
          <p className="tools-grid__count">
            Showing <strong>{tools.length}</strong> {tools.length === 1 ? 'tool' : 'tools'}
            {searchQuery && <> for "<strong>{searchQuery}</strong>"</>}
          </p>
        </div>

        <div
          ref={parentRef}
          className="tools-grid-container"
          style={{
            height: '100%',
            width: '100%',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const rowTools = rows[virtualRow.index];
              return (
                <div
                  key={virtualRow.key}
                  className="tools-grid"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {rowTools.map((tool, colIndex) => (
                    <ToolCard
                      key={tool.slug}
                      tool={tool}
                      index={virtualRow.index * columns + colIndex}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
