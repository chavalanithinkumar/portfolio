import './Experience.css';

function Experience() {
  const milestones = [
    { year: '2024', title: 'Frontend Learning Journey', text: 'Built personal web projects and strengthened React fundamentals.' },
    { year: '2025', title: 'Internship / Practice', text: 'Worked on practical UI tasks and web design improvements.' },
    { year: '2026', title: 'Portfolio Growth', text: 'Focused on premium UI systems, responsive design, and polished developer branding.' },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>My learning journey and growth path.</h2>
      </div>

      <div className="timeline">
        {milestones.map((item) => (
          <article key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
