import React, { useState } from 'react';
import '../styles/SignupLogin.css';

function SignupLogin() {
  const [isSignup, setIsSignup] = useState(false);
  const [userType, setUserType] = useState('owner');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
    console.log('Form submitted:', { ...formData, userType });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{isSignup ? 'S\'inscrire' : 'Se connecter'}</h1>
          <p>sur PawPal</p>
        </div>

        {isSignup && (
          <div className="user-type-selector">
            <label className={`user-type ${userType === 'owner' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="owner" 
                checked={userType === 'owner'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Propriétaire
            </label>
            <label className={`user-type ${userType === 'sitter' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="sitter" 
                checked={userType === 'sitter'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Pet Sitter
            </label>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="form-group">
              <label>Nom complet</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
              />
            </div>
          )}

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

          {isSignup && (
            <div className="form-group">
              <label>Numéro de téléphone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+33 6 XX XX XX XX"
              />
            </div>
          )}

          <div className="form-group">
            <label>Mot de passe</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
            />
          </div>

          {isSignup && (
            <div className="form-group">
              <label>Confirmer le mot de passe</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block">
            {isSignup ? 'S\'inscrire' : 'Se connecter'}
          </button>
        </form>

        <div className="oauth-section">
          <p>ou</p>
          <button className="btn btn-secondary btn-block">Continuer avec Google</button>
          <button className="btn btn-secondary btn-block">Continuer avec Facebook</button>
        </div>

        <div className="auth-toggle">
          <p>
            {isSignup ? 'Vous avez déjà un compte? ' : 'Pas encore de compte? '}
            <button 
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="toggle-btn"
            >
              {isSignup ? 'Se connecter' : 'S\'inscrire'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;
