import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Votre message a été envoyé!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Nous contacter</h1>
        <p>Une question? Nous sommes là pour vous aider!</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@pawpal.com</p>
          </div>
          <div className="info-card">
            <h3>📞 Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="info-card">
            <h3>📍 Adresse</h3>
            <p>123 Rue de Paris<br/>75001 Paris, France</p>
          </div>
          <div className="info-card">
            <h3>🕒 Horaires</h3>
            <p>Lun-Ven: 9h-18h<br/>Sam: 10h-16h</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Formulaire de contact</h2>

          <div className="form-group">
            <label>Nom</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Sujet</label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Sujet du message"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Envoyer le message
          </button>
        </form>
      </section>

      <section className="social-links">
        <h2>Suivez-nous</h2>
        <div className="social-icons">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
