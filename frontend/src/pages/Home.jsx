import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>La meilleure plateforme pour trouver un pet sitter de confiance.</h1>
          <p>Trouvez le gardien parfait pour votre animal de compagnie en quelques clics.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Télécharger l'application</button>
            <Link to="/auth" className="btn btn-secondary">S'inscrire</Link>
            <Link to="/become-sitter" className="btn btn-tertiary">Devenir pet sitter</Link>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <h2>Pourquoi PawPal ?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Réserver</h3>
            <p>Trouvez et réservez facilement un pet sitter</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payer</h3>
            <p>Paiements sécurisés et transparents</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Suivi en direct</h3>
            <p>Suivi en temps réel de votre animal</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Confiance</h3>
            <p>Profils vérifiés et avis authentiques</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Témoignages d'utilisateurs</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"PawPal m'a permis de trouver la personne parfaite pour mon chien. Je suis très satisfait!"</p>
            <span>- Marie D.</span>
          </div>
          <div className="testimonial">
            <p>"J'ai commencé à être pet sitter et j'adore! Excellent système de paiement."</p>
            <span>- Jean P.</span>
          </div>
          <div className="testimonial">
            <p>"La sécurité et la transparence sont les points forts de PawPal."</p>
            <span>- Sophie T.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
