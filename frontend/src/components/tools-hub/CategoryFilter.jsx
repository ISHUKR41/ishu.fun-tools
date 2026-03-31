import { useRef, useEffect, useState } from 'react';
import { CATEGORIES } from '../../data/categories.data';
import { TOOLS } from '../../data/tools.data';
import * as LucideIcons from 'lucide-react';
import './CategoryFilter.css';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const scrollRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Compute counts
  const categoriesWithCounts = CATEGORIES.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? TOOLS.length : TOOLS.filter(t => t.category === cat.id).length,
  }));

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 10);
    setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="category-filter" id="category-filter">
      <div className="category-filter__inner container">
        {showLeftFade && <div className="category-filter__fade category-filter__fade--left" />}
        
        <div className="category-filter__scroll" ref={scrollRef} onScroll={handleScroll}>
          {categoriesWithCounts.map((cat) => {
            const Icon = LucideIcons[cat.icon] || LucideIcons.Folder;
            const isActive = activeCategory === cat.id;
            
            return (
              <button
                key={cat.id}
                className={`category-filter__tab ${isActive ? 'category-filter__tab--active' : ''} ${cat.isSpecial ? 'category-filter__tab--special' : ''}`}
                onClick={() => onCategoryChange(cat.id)}
                style={isActive ? { '--tab-color': cat.color } : {}}
                aria-pressed={isActive}
              >
                <Icon size={15} />
                <span className="category-filter__label">{cat.label}</span>
                <span className="category-filter__count">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {showRightFade && <div className="category-filter__fade category-filter__fade--right" />}
      </div>
    </div>
  );
}
