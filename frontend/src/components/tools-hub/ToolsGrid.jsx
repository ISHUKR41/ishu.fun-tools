import { useMemo, useEffect, useState } from 'react';
import ToolCard from './ToolCard';
import './ToolsGrid.css';

// Optimized rendering: Load tools in batches for ultra-smooth 90-120 FPS
const INITIAL_BATCH = 24; // Load first 24 tools immediately
const BATCH_SIZE = 12; // Load 12 more at a time

export default function ToolsGrid({ tools, searchQuery }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [isLoading, setIsLoading] = useState(false);

  // Reset visible count when tools change (e.g., new search/filter)
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [tools]);

  // Infinite scroll implementation for smooth performance
  useEffect(() => {
    if (visibleCount >= tools.length) return;

    const handleScroll = () => {
      if (isLoading) return;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000;

      if (scrolledToBottom) {
        setIsLoading(true);
        // Batch load with RAF for 60+ FPS
        requestAnimationFrame(() => {
          setVisibleCount(prev => Math.min(prev + BATCH_SIZE, tools.length));
          setIsLoading(false);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, tools.length, isLoading]);

  const visibleTools = useMemo(() =>
    tools.slice(0, visibleCount),
    [tools, visibleCount]
  );

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

        <div className="tools-grid">
          {visibleTools.map((tool, index) => (
            <ToolCard key={tool.slug} tool={tool} index={index} />
          ))}
        </div>

        {visibleCount < tools.length && (
          <div className="tools-grid__loader" style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
            Loading more tools...
          </div>
        )}
      </div>
    </section>
  );
}
