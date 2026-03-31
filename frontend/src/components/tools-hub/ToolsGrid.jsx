import { useMemo } from 'react';
import ToolCard from './ToolCard';
import './ToolsGrid.css';

export default function ToolsGrid({ tools, searchQuery }) {
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
          {tools.map((tool, index) => (
            <ToolCard key={tool.slug} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
