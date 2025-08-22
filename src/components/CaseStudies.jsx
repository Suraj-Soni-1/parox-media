const items = [
  {
    title: "From 1,500 to 10,000 followers in 90 days",
    points: [
      "Followers +566%",
      "Impressions 200k → 1M",
      "40k engagements",
      "Landed speaking invites & $100k in gigs",
    ],
  },
  {
    title: "Founder narrative revamp boosted inbound",
    points: ["Clear positioning", "Higher reply rates", "More qualified calls"],
  },
  {
    title: "Technical leader → recognized authority",
    points: ["Consistent thought leadership", "PR mentions", "Pipeline growth"],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((c) => (
            <article key={c.title} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-3">{c.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {c.points.map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
