import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.alert('Thanks for reaching out!');
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p className="section-label">Contact</p>
        <h2>Let’s create something great together.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Reach me</h3>
          <p>Phone: +91 7207451955</p>
          <p>Email: nithin@example.com</p>
          <p>GitHub: github.com/nithin</p>
          <p>LinkedIn: linkedin.com/in/nithin</p>
          <p>Address: Hyderabad, India</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
