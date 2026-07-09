import { useState } from 'react';
import './Navbar.css';

function Navbar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Certificates', 'Contact'];

  function handleLinkClick(sectionName) {
    setMenuOpen(false);
    onNavigate(sectionName);
  }

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => handleLinkClick('home')}>
        Nithin<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => {
          const sectionId = link.toLowerCase();

          return (
            <a
              key={link}
              href={`#${sectionId}`}
              className={activeSection === sectionId ? 'active' : ''}
              onClick={() => handleLinkClick(sectionId)}
            >
              {link}
            </a>
          );
        })}

        <a className="resume-link" href="#contact" onClick={() => handleLinkClick('contact')}>
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
