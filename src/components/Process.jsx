const steps = [
  {
    n: 1,
    title: "Discovery & Research",
    bullets: [
      "Audit current content & materials",
      "Identify gaps and opportunities",
      "Competitor & audience research",
      "90-minute strategy session",
    ],
  },
  {
    n: 2,
    title: "Positioning & Strategy",
    bullets: [
      "Define ICP & pain points",
      "Craft brand narrative",
      "Structure offers for impact",
    ],
  },
  {
    n: 3,
    title: "Content Development",
    bullets: [
      "Data-driven storytelling",
      "Hooks & angles that land",
      "Deliver 15–30 ready-to-post pieces",
    ],
  },
  {
    n: 4,
    title: "Execution & Engagement",
    bullets: [
      "Publish at optimal times",
      "Implement lead gen plays",
      "Engage key industry voices",
    ],
  },
  {
    n: 5,
    title: "Optimisation & Growth",
    bullets: [
      "Track & analyse performance",
      "Reports with clear next steps",
      "Iterate & improve continuously",
    ],
  },
  {
    n: 6,
    title: "Scale & Authority",
    bullets: [
      "New formats (video, long-form)",
      "PR & partnerships",
      "Maximise reach & conversions",
    ],
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border rounded-2xl p-6">
              <div className="text-sm text-gray-500">Step {s.n}</div>
              <h3 className="text-xl font-semibold mt-1 mb-4">{s.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {s.bullets.map((b, i) => (
                  <li key={i}>✔ {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
