export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: ["1 Page Website", "Basic Design", "Email Support"],
    },
    {
      name: "Standard",
      price: "$299",
      features: [
        "5 Page Website",
        "Responsive Design",
        "SEO Optimization",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      price: "$599",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "E-commerce Integration",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
