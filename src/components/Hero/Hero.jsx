import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ['React', 'UI', 'Modern Web'];
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting && text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(currentWord.slice(0, text.length - 1));
      } else if (!isDeleting && text.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Hello 👋 I am</p>
        <h1>Nithin Kumar</h1>
        <h2>
          I build <span>{text}</span> experiences
        </h2>
        <p className="hero-description">
          I create polished frontend experiences with React, clean UI systems, and thoughtful user journeys.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#contact">
            Hire Me
          </a>
          <a className="secondary-btn" href="#about">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="shape shape-one" />
        <div className="shape shape-two" />
        <div className="orbital-card">
          <div className="badge">React</div>
          <div className="floating-icon react">⚛</div>
          <div className="floating-icon js">JS</div>
          <div className="floating-icon html">HTML</div>
          <div className="floating-icon css">CSS</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
