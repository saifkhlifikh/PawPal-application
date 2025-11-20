import React from 'react';
import '../styles/Download.css';

function Download() {
  return (
    <div className="download-container">
      <section className="download-hero">
        <h1>Télécharger l'application PawPal</h1>
        <p>Disponible sur iOS et Android</p>
      </section>

      <section className="download-buttons">
        <div className="download-card">
          <h3>📱 iOS</h3>
          <p>Disponible sur l'App Store</p>
          <button className="btn btn-primary btn-large">
            Télécharger sur App Store
          </button>
          <div className="qr-code">
            [QR Code pour App Store]
          </div>
        </div>

        <div className="download-card">
          <h3>🤖 Android</h3>
          <p>Disponible sur Google Play</p>
          <button className="btn btn-primary btn-large">
            Télécharger sur Google Play
          </button>
          <div className="qr-code">
            [QR Code pour Google Play]
          </div>
        </div>
      </section>

      <section className="download-features">
        <h2>Fonctionnalités de l'application</h2>
        <div className="features-list">
          <div className="feature">
            <span>✅</span>
            <p>Notifications en temps réel</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <p>Chat intégré</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <p>Localisation GPS</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <p>Photos en direct</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <p>Gestion des réservations</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <p>Historique des paiements</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
