import './Certificates.css';

function Certificates() {
  const certificates = [
    { title: 'React Basics', org: 'Frontend Learning' },
    { title: 'Modern CSS', org: 'Design Systems' },
    { title: 'JavaScript Essentials', org: 'Developer Learning' },
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-heading">
        <p className="section-label">Certificates</p>
        <h2>Learning milestones and completed courses.</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((item) => (
          <article key={item.title} className="certificate-card">
            <div className="certificate-badge">✓</div>
            <h3>{item.title}</h3>
            <p>{item.org}</p>
            <a href="#contact">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
