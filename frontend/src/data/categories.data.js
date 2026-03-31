export const CATEGORIES = [
  { id: 'all', label: 'All Tools', icon: 'LayoutGrid', count: 0, color: '#9B9BB4', gradient: 'linear-gradient(135deg, rgba(155,155,180,0.15), rgba(155,155,180,0.05))' },
  { id: 'organize', label: 'Organize', icon: 'Grid2x2', count: 0, color: '#3B82F6', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.05))' },
  { id: 'convert-from-pdf', label: 'From PDF', icon: 'ArrowUpRight', count: 0, color: '#8B5CF6', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.05))' },
  { id: 'convert-to-pdf', label: 'To PDF', icon: 'ArrowDownLeft', count: 0, color: '#10B981', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(20,184,166,0.05))' },
  { id: 'pdf-security', label: 'Security', icon: 'ShieldCheck', count: 0, color: '#EF4444', gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(244,63,94,0.05))' },
  { id: 'edit-pdf', label: 'Edit PDF', icon: 'FilePenLine', count: 0, color: '#F59E0B', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.05))' },
  { id: 'extract', label: 'Extract', icon: 'FileOutput', count: 0, color: '#EC4899', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(232,121,249,0.05))' },
  { id: 'ai-powered', label: 'AI Tools ✨', icon: 'Sparkles', count: 0, color: '#6366F1', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.05))', isSpecial: true },
  { id: 'advanced', label: 'Advanced', icon: 'Settings2', count: 0, color: '#6B7280', gradient: 'linear-gradient(135deg, rgba(107,114,128,0.15), rgba(107,114,128,0.05))' },
];

export function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

export function getCategoryColor(categoryId) {
  const cat = getCategoryById(categoryId);
  return cat ? cat.color : '#9B9BB4';
}
