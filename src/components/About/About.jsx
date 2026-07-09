import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Crafting thoughtful interfaces with purpose.</h2>
      </div>

      <div className="about-grid">
        <div className="profile-card">
          <div className="avatar">NK</div>
          <h3>Frontend React Developer</h3>
          <p>
            I am a developer who loves turning ideas into polished digital products with a strong focus on clarity,
            performance, and elegant UX.
          </p>
        </div>

        <div className="about-details">
          <p>
            My journey has been shaped by hands-on learning, building small web projects, and exploring modern frontend
            technologies. I enjoy combining visual design with practical coding to create products that feel premium and easy to use.
          </p>
          <ul>
            <li>Location: Hyderabad, India</li>
            <li>Education: B.Tech / Web Development Path</li>
            <li>Strengths: Problem solving, UI detail, consistency</li>
            <li>Passion: Creating modern experiences that feel alive</li>
          </ul>
          <a className="primary-btn" href="#contact">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
