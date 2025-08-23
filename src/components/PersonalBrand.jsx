// src/components/PersonalBrand.jsx
import React from "react";

export default function PersonalBrand() {
  const cards = [
    {
      id: 1,
      title: "Build Unstoppable Influence",
      text:
        "Position yourself as a recognized authority and grow an audience that amplifies you daily.",
      img: "/brand/1.png",
    },
    {
      id: 2,
      title: "Build Unstoppable Influence",
      text:
        "Show up consistently with a message that compounds your reach and credibility.",
      img: "/brand/2.png",
    },
    {
      id: 3,
      title: "Build Unstoppable Influence",
      text:
        "Turn attention into opportunities with content that actually moves people.",
      img: "/brand/3.png",
    },
  ];

  return (
    <section id="personal-brand" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Turn Your Personal Brand Into Endless Opportunities
        </h2>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-6 items-stretch">
            {cards.map((card) => (
              <article
                key={card.id}
                className="min-w-[300px] sm:min-w-[360px] md:min-w-[420px] bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
              >
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-44 w-full object-cover rounded-xl mb-4"
                  />
                )}
                {/* ✅ only ONE heading */}
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                {/* ✅ only ONE paragraph */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
