const items = Array.from({ length: 12 }, (_, i) => ({
  alt: `Logo ${i + 1}`,
  src: `https://via.placeholder.com/120x40?text=Logo+${i + 1}`,
}));

export default function Logos() {
  return (
    <section className="border-y bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-center text-gray-600 mb-6">Our clients have been featured in</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {items.map((l) => (
            <img key={l.alt} alt={l.alt} src={l.src} className="mx-auto opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
}
