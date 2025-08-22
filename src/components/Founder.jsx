export default function Founder() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <img
          className="w-full h-72 object-cover rounded-2xl"
          src="https://via.placeholder.com/640x400?text=Founder+Photo"
          alt="Founder"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
          <p className="text-gray-700">
            Building personal brands that open doors to clients, investors, and opportunities.
            We’ve helped 50+ clients establish authority and scale their audience with strategic content.
          </p>
          <a
            href="https://www.linkedin.com/"
            className="inline-block mt-6 px-4 py-2 rounded-lg border"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
