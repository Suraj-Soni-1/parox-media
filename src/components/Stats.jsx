const stats = [
  { value: "10,000+", label: "LinkedIn Posts Written" },
  { value: "400M+", label: "Monthly Impressions" },
  { value: "50+", label: "Founders & Creators Served" },
  { value: "₹4Cr+", label: "Delivered in Revenue" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="text-gray-600 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
