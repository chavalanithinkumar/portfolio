import './Services.css';

function Services() {
  const services = [
    { title: 'React Development', description: 'Build modern SPA interfaces with reusable components and clean architecture.' },
    { title: 'Frontend Development', description: 'Create fast, polished user experiences for web products and startups.' },
    { title: 'Responsive Websites', description: 'Design websites that feel great on mobile, tablet, laptop, and desktop.' },
    { title: 'UI Design', description: 'Shape premium visual systems with thoughtful layouts, spacing, and motion.' },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <p className="section-label">Services</p>
        <h2>Focused support for modern web products.</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
