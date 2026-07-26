import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  const allProjects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web Design",
      image: "https://via.placeholder.com/400x400?text=E-Commerce",
      description: "A responsive e-commerce platform with a clean and intuitive design that drives conversions.",
      details: "Custom web design, responsive layout, payment integration"
    },
    {
      id: 2,
      name: "Wellness Brand Site",
      category: "Web Design",
      image: "https://via.placeholder.com/400x400?text=Wellness",
      description: "A calming wellness brand website that reflects the brand's values and mission.",
      details: "Brand-aligned design, user experience focused, mobile-first approach"
    },
    {
      id: 3,
      name: "Tech Startup",
      category: "Web Design",
      image: "https://via.placeholder.com/400x400?text=Tech+Startup",
      description: "A modern and sleek website for a tech startup to showcase their innovative solutions.",
      details: "Modern design, performance optimized, SEO friendly"
    },
    {
      id: 4,
      name: "Beauty Brand Campaign",
      category: "Social Media Work",
      image: "https://via.placeholder.com/400x400?text=Beauty",
      description: "An engaging social media campaign that increased brand awareness and customer engagement.",
      details: "Content strategy, visual design, community management"
    },
    {
      id: 5,
      name: "Fitness Coach Growth",
      category: "Social Media Work",
      image: "https://via.placeholder.com/400x400?text=Fitness",
      description: "Social media management that helped a fitness coach build a thriving online community.",
      details: "Daily content creation, engagement strategy, growth tracking"
    },
    {
      id: 6,
      name: "Lifestyle Brand",
      category: "Social Media Work",
      image: "https://via.placeholder.com/400x400?text=Lifestyle",
      description: "A comprehensive social strategy for a lifestyle brand that resonates with their audience.",
      details: "Content planning, visual branding, influencer collaboration"
    }
  ];

  return (
    <div className="w-full">
      {/* Portfolio Header */}
      <section className="bg-dark text-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg opacity-90">Explore my recent work and see what I can do for your brand</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-primary text-dark py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-dark"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="text-primary opacity-70 mb-4">{project.description}</p>
                  <p className="text-sm text-secondary font-semibold">{project.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-lg mb-8 opacity-90">Let's work together to bring your vision to life</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
