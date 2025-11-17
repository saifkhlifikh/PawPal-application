import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="pp-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <h3>PawPal</h3>
          <p>La meilleure plateforme pour trouver un pet sitter de confiance.</p>
        </div>

        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legal">CGU / Confidentialité</Link>
          <Link to="/download">Télécharger</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <small>© {new Date().getFullYear()} PawPal. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
