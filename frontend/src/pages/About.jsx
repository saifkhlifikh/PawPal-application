import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>À propos de PawPal</h1>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Notre Origine</h2>
          <p>
            PawPal est née d'une simple idée : créer une plateforme fiable et sécurisée 
            pour connecter les propriétaires de animaux avec des pet sitters de confiance.
          </p>
        </div>

        <div className="about-section">
          <h2>Notre Objectif</h2>
          <p>
            Aider les propriétaires à trouver un gardien idéal pour leurs animaux et 
            créer des opportunités professionnelles pour les passionnés de animaux.
          </p>
        </div>

        <div className="about-section">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🔒 Sécurité</h3>
              <p>La sécurité de votre animal est notre priorité</p>
            </div>
            <div className="value-card">
              <h3>🤝 Confiance</h3>
              <p>Profils vérifiés et transparence totale</p>
            </div>
            <div className="value-card">
              <h3>👁️ Transparence</h3>
              <p>Communication claire et avis authentiques</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
