const services = [
  {
    title: "LinkedIn Lead Generation",
    points: [
      "Personalised outreach (not spam)",
      "Engage the right people at the right time",
      "Fill your calendar with qualified leads",
      "Methods that turn connections into clients",
    ],
  },
  {
    title: "Community Building",
    points: [
      "Spark meaningful conversations",
      "Content that builds loyalty (not just likes)",
      "Create a space people want to join",
      "Turn followers into advocates",
    ],
  },
  {
    title: "X / Twitter Ghostwriting",
    points: [
      "Tweets that sound like you",
      "Replies & engagement handled",
      "Narrative threads that build trust",
      "Attract the right audience",
    ],
  },
  {
    title: "Consulting",
    points: [
      "Personal brand & content strategy",
      "Clear step-by-step plans",
      "Platform & algorithm guidance",
      "Ongoing optimisation support",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {s.points.map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
