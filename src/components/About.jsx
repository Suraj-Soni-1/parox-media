export default function About() {
  return (
    <section className="bg-white py-16" id="about">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mb-4">
            At <span className="font-semibold">Parox Media</span>, we believe in building
            creative digital solutions that help businesses grow. Our team
            specializes in web development, branding, and digital strategy.
          </p>
          <p className="text-gray-600">
            With a passion for design and technology, we create experiences
            that leave a lasting impact. Let’s transform your ideas into reality!
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="About Parox Media"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
