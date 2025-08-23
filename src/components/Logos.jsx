export default function Logos() {
  const logos = [
    
  ];

  return (
    <section className="py-12 bg-black text-white overflow-hidden">
      <h2 className="text-center text-lg font-semibold mb-6">
        Our clients have been featured in
      </h2>

      {/* Scrolling logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
