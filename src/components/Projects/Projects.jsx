import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Fail Forward', description: 'A bold storytelling website focused on strong visual pacing and clean content hierarchy.', tech: ['React', 'CSS'], github: '#', demo: '#' },
    { title: 'Furniture Website', description: 'An elegant e-commerce inspired landing page with premium visuals and smooth flows.', tech: ['React', 'JS'], github: '#', demo: '#' },
    { title: 'Travel Website', description: 'A vibrant destination experience with immersive visuals and a clear call to action.', tech: ['React', 'CSS'], github: '#', demo: '#' },
    { title: 'Plant Website', description: 'A calm, modern landing experience with soft colors and a refined layout.', tech: ['React', 'CSS'], github: '#', demo: '#' },
    { title: 'Birthday Surprise Website', description: 'A playful celebration landing page built with creativity and charm.', tech: ['React', 'CSS'], github: '#', demo: '#' },
    { title: 'Laptop Store', description: 'A sleek product-focused experience with polished cards and strong conversion cues.', tech: ['React', 'JS'], github: '#', demo: '#' },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected work that blends design and React.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image" />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.demo}>Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
