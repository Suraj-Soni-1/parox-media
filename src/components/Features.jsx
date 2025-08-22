function Features() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">🚀 Fast Development</h3>
            <p className="text-gray-600">
              Build and deploy modern applications quickly with our tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">⚡ Performance</h3>
            <p className="text-gray-600">
              Optimized for speed, scalability, and smooth user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">🔒 Security</h3>
            <p className="text-gray-600">
              Built with best practices to keep your data safe and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
