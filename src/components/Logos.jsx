export default function Logos() {
  const logos = [
    { src: "/1.png", alt: "BBC" },
    { src: "/2.png", alt: "Fast Company" },
    { src: "/3.png", alt: "Bloomberg" },
    { src: "/4.png", alt: "TechCrunch" },
    { src: "/5.png", alt: "Forbes" },
    { src: "/6.png", alt: "The Guardian" },
    { src: "/7.png", alt: "Wired" },
    { src: "/8.png", alt: "New York Times" },
    { src: "/9.png", alt: "CNN" },
    { src: "/10.png", alt: "Vice" },
    { src: "/11.png", alt: "NBC" },
    { src: "/12.png", alt: "CNBC" },
    { src: "/13.png", alt: "Reuters" },
    { src: "/14.png", alt: "Engadget" },
    { src: "/15.png", alt: "Business Insider" },
    { src: "/16.png", alt: "Financial Times" },
  ];

   return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <h2 className="text-center text-lg font-semibold mb-10">
        Our clients have been featured in
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
//   return (
//     <section className="py-16 bg-black text-white">
//       <h2 className="text-center text-lg font-semibold mb-10">
//         Our clients have been featured in
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
//         {logos.map((logo, index) => (
//           <img
//             key={index}
//             src={logo.src}
//             alt={logo.alt}
//             className="h-10 object-contain opacity-70 hover:opacity-100 transition"
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
