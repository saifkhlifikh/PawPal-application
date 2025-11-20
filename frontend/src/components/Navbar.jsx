import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="pp-navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">PawPal</Link>
        <ul className="nav-links">
          <li><Link to="/find-sitter">Trouver un sitter</Link></li>
          <li><Link to="/features">Fonctionnalités</Link></li>
          <li><Link to="/become-sitter">Devenir sitter</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/download">Télécharger</Link></li>
          <li className="auth-link"><Link to="/auth">S'inscrire / Se connecter</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
