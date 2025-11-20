import React from 'react';
import '../styles/BecomeSitter.css';

function BecomeSitter() {
  return (
    <div className="become-sitter">
      <section className="become-sitter-hero">
        <h1>Devenir pet sitter avec PawPal</h1>
        <p>Gagnez de l'argent en vous occupant d'animaux que vous adorez</p>
      </section>

      <section className="benefits">
        <h2>Avantages de devenir sitter</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>💰 Gains flexibles</h3>
            <p>Fixez vos propres tarifs et travaillez à votre rythme</p>
          </div>
          <div className="benefit-card">
            <h3>⏰ Flexibilité</h3>
            <p>Choisissez vos horaires et vos jours de travail</p>
          </div>
          <div className="benefit-card">
            <h3>🛡️ Assurance</h3>
            <p>Protégé par notre assurance responsabilité civile</p>
          </div>
          <div className="benefit-card">
            <h3>⭐ Visibilité</h3>
            <p>Construisez votre réputation et votre clientèle</p>
          </div>
        </div>
      </section>

      <section className="signup-steps">
        <h2>Étapes pour s'inscrire</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Créer un profil</h3>
            <p>Complétez vos informations personnelles</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Ajouter vos services</h3>
            <p>Décrivez vos services et vos tarifs</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Vérification</h3>
            <p>Validation de votre profil par notre équipe</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Commencez!</h3>
            <p>Acceptez les demandes et gagnez de l'argent</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Prêt à commencer?</h2>
        <button className="btn btn-primary btn-large">Créer un profil sitter</button>
      </section>
    </div>
  );
}

export default BecomeSitter;
