export default function Logos() {
  const logos = [
    { src: "/1.png", alt: "Logo 1" },
    { src: "/2.png", alt: "Logo 2" },
    { src: "/3.png", alt: "Logo 3" },
    { src: "/4.png", alt: "Logo 4" },
    { src: "/5.png", alt: "Logo 5" },
    { src: "/6.png", alt: "Logo 6" },
    { src: "/7.png", alt: "Logo 7" },
    { src: "/8.png", alt: "Logo 8" },
    { src: "/9.png", alt: "Logo 9" },
    { src: "/10.png", alt: "Logo 10" },
    { src: "/11.png", alt: "Logo 11" },
    { src: "/12.png", alt: "Logo 12" },
    { src: "/13.png", alt: "Logo 13" },
    { src: "/14.png", alt: "Logo 14" },
    { src: "/15.png", alt: "Logo 15" },
    { src: "/16.png", alt: "Logo 16" },
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
