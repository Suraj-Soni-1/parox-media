// src/components/ServiceBlocks.jsx
import React from "react";

const Block = ({ title, points, img, reverse = false }) => (
  <div
    className={`py-12 grid gap-8 items-center ${
      reverse ? "md:grid-cols-2 md:flex-row-reverse" : "md:grid-cols-2"
    }`}
  >
    <div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-600" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <img
        src={img}
        alt={title}
        className="rounded-2xl w-full h-64 object-cover border border-zinc-200"
      />
    </div>
  </div>
);

export default function ServiceBlocks() {
  return (
    <section id="service-blocks" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Block
          title="LinkedIn Lead Generation"
          img="/services/linkedin.png"
          points={[
            "Personalized outreach that feels human",
            "Engage the right people at the right time",
            "Fill your calendar with qualified leads",
            "Proven methods to turn connections into clients",
          ]}
        />

        <Block
          title="Community Building"
          img="/services/community.png"
          reverse={true}
          points={[
            "Spark real conversations that keep people engaged",
            "Create content that builds loyalty (not just likes)",
            "Design spaces people want to return to",
            "Turn followers into true advocates",
          ]}
        />

        <Block
          title="X / Twitter Ghostwriting"
          img="/services/twitter.png"
          points={[
            "Tweets that sound like you",
            "We handle replies and daily engagement",
            "Threads that tell your story and build trust",
            "Attract the right audience consistently",
          ]}
        />
      </div>
    </section>
  );
}
