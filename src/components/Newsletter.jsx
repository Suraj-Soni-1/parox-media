export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-2xl font-bold mb-3">Growth strategies straight to your inbox</h3>
        <p className="text-gray-300 mb-6">
          Frameworks for personal brand growth, breakdowns of viral content, and more.
        </p>
        <form className="max-w-xl mx-auto flex gap-3">
          <input
            className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            placeholder="Enter your email"
          />
          <button className="px-5 py-3 rounded-lg bg-white text-black">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
