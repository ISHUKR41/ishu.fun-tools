import './Marquee.css';

const MARQUEE_ITEMS = [
  'Merge PDF', 'Compress PDF', 'PDF to Word', 'Split PDF', 'Sign PDF',
  'OCR PDF', 'Translate PDF', 'Chat with PDF', 'Protect PDF', 'Edit PDF',
  'PDF to JPG', 'Word to PDF', 'Excel to PDF', 'Watermark PDF', 'Rotate PDF',
  'Summarize PDF', 'Extract Text', 'Image to PDF', 'Compare PDF', 'Annotate PDF',
];

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" id="tools-marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
