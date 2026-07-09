import './Skills.css';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'VS Code',
    'Firebase',
    'Node.js',
    'Express',
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Tools and technologies I enjoy working with.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill} className="skill-card">
            <div className="skill-content">
              <h3>{skill}</h3>
              <p>Core skill</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
