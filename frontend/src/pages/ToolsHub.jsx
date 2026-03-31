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
import { lenisScrollTo } from '../hooks/useLenis';

const fuse = new Fuse(TOOLS, {
  keys: ['name', 'description', 'slug', 'category'],
  threshold: 0.35,
  distance: 80,
  minMatchCharLength: 2,
});

export default function ToolsHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    let result = TOOLS;
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery.trim());
      result = searchResults.map((r) => r.item);
    }
    if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory);
    }
    return result;
  }, [activeCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory('all');
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
    // Use Lenis scroll instead of native scrollIntoView (which conflicts with Lenis)
    const el = document.getElementById('tools-grid');
    if (el) {
      lenisScrollTo(el, { offset: -80 });
    }
  };

  return (
    <main className="tools-hub">
      <HeroSection onSearch={handleSearch} />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      {!searchQuery && activeCategory === 'all' && <FeaturedTools />}
      <ToolsGrid tools={filteredTools} searchQuery={searchQuery} />
      <Marquee />
      <TrustSection />
      <HowItWorks />
    </main>
  );
}
