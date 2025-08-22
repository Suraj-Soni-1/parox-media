export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-gray-50 p-8 rounded-2xl shadow space-y-6">
          <div>
            <label className="block text-gray-600">Name</label>
            <input className="mt-2 w-full border rounded-lg p-3" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input type="email" className="mt-2 w-full border rounded-lg p-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-gray-600">Objective</label>
            <select className="mt-2 w-full border rounded-lg p-3">
              <option>Lead Generation</option>
              <option>Ghostwriting</option>
              <option>Personal Branding</option>
              <option>Consulting</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600">Message</label>
            <textarea rows="4" className="mt-2 w-full border rounded-lg p-3" placeholder="Tell us a bit about your goals…" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Are you ready to invest ₹500/month?</span>
            <label className="flex items-center gap-2"><input type="radio" name="budget" /> Yes</label>
            <label className="flex items-center gap-2"><input type="radio" name="budget" /> No</label>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg">Submit</button>
        </form>
      </div>
    </section>
  );
}
