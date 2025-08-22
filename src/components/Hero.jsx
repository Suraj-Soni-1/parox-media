import { useEffect, useState } from "react";

const words = ["Noticed", "Trusted", "Paid"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Strategic Content That{" "}
          <span className="block">
            Gets You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {words[i]}
            </span>
          </span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Daily thought leadership, strategic storytelling, and consistent output so your brand doesn’t go unnoticed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="bg-black text-white px-5 py-3 rounded-lg">
            Book a Call Now
          </a>
          <a href="#cases" className="px-5 py-3 rounded-lg border">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
