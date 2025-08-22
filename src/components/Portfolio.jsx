export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      img: "https://via.placeholder.com/400x250.png?text=E-Commerce+Website",
    },
    {
      title: "Business Landing Page",
      img: "https://via.placeholder.com/400x250.png?text=Business+Landing+Page",
    },
    {
      title: "Mobile App UI",
      img: "https://via.placeholder.com/400x250.png?text=Mobile+App+UI",
    },
  ];

  return (
    <section className="bg-white py-16" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
