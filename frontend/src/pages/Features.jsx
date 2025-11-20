import React from 'react';
import '../styles/Features.css';

function Features() {
  return (
    <div className="features">
      <section className="features-hero">
        <h1>Nos Fonctionnalités</h1>
      </section>

      <section className="features-content">
        <div className="features-section">
          <h2>Pour les propriétaires</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>👤 Profil animal</h3>
              <p>Créez un profil détaillé pour votre animal</p>
            </div>
            <div className="feature-item">
              <h3>🔍 Recherche de sitters</h3>
              <p>Trouvez le sitter parfait selon vos critères</p>
            </div>
            <div className="feature-item">
              <h3>💬 Chat en direct</h3>
              <p>Communiquez directement avec les sitters</p>
            </div>
            <div className="feature-item">
              <h3>💳 Paiement sécurisé</h3>
              <p>Transactions sécurisées et fiables</p>
            </div>
            <div className="feature-item">
              <h3>📸 Mise à jour photo</h3>
              <p>Recevez des photos de votre animal</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Pour les pet sitters</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>🎯 Profil professionnel</h3>
              <p>Créez un profil attrayant et complet</p>
            </div>
            <div className="feature-item">
              <h3>📅 Disponibilités</h3>
              <p>Gérez facilement vos disponibilités</p>
            </div>
            <div className="feature-item">
              <h3>🔔 Notifications</h3>
              <p>Recevez les demandes en temps réel</p>
            </div>
            <div className="feature-item">
              <h3>⭐ Avis et notation</h3>
              <p>Construisez votre réputation</p>
            </div>
            <div className="feature-item">
              <h3>💰 Suivi des gains</h3>
              <p>Suivez vos revenus facilement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
