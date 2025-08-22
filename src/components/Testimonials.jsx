const testimonials = [
  {
    name: "Client A",
    role: "Founder",
    quote:
      "Clear strategy, consistent content, and results that actually impacted revenue.",
  },
  {
    name: "Client B",
    role: "Marketing Lead",
    quote:
      "They helped us stand out and build real trust with our audience.",
  },
  {
    name: "Client C",
    role: "Creator",
    quote:
      "Smooth process, strong ideas, and growth we could measure.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-gray-50 p-6 rounded-2xl shadow">
              <blockquote className="text-gray-700 italic">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
