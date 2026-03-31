import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import HeroSection from '../components/tools-hub/HeroSection';
import CategoryFilter from '../components/tools-hub/CategoryFilter';
import FeaturedTools from '../components/tools-hub/FeaturedTools';
import ToolsGrid from '../components/tools-hub/ToolsGrid';
import TrustSection from '../components/tools-hub/TrustSection';
import HowItWorks from '../components/tools-hub/HowItWorks';
import Marquee from '../components/tools-hub/Marquee';
import { TOOLS } from '../data/tools.data';

// Initialize Fuse.js for fuzzy search
const fuse = new Fuse(TOOLS, {
  keys: ['name', 'description', 'slug', 'category'],
  threshold: 0.35,
  distance: 80,
  minMatchCharLength: 2,
});

export default function ToolsHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tools based on category and search
  const filteredTools = useMemo(() => {
    let result = TOOLS;

    // Apply search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery.trim());
      result = searchResults.map((r) => r.item);
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory);
    }

    return result;
  }, [activeCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory('all'); // Reset category when searching
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when switching categories
    
    // Scroll to tools grid
    const el = document.getElementById('tools-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="tools-hub">
      {/* Hero with search */}
      <HeroSection onSearch={handleSearch} />

      {/* Category filter (sticky) */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Featured tools (only show when no search active and category is 'all') */}
      {!searchQuery && activeCategory === 'all' && <FeaturedTools />}

      {/* Main tools grid */}
      <ToolsGrid tools={filteredTools} searchQuery={searchQuery} />

      {/* Marquee */}
      <Marquee />

      {/* Trust & Security */}
      <TrustSection />

      {/* How It Works */}
      <HowItWorks />
    </main>
  );
}
