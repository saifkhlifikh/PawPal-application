import React, { useState } from 'react';
import '../styles/FindSitter.css';

function FindSitter() {
  const [filters, setFilters] = useState({
    location: '',
    priceMin: 0,
    priceMax: 100,
    serviceType: '',
    minRating: 0
  });

  const [sitters] = useState([
    { id: 1, name: 'Alice Martin', photo: '👩‍🦰', rating: 4.9, distance: '2 km', price: 25, services: ['Promenade', 'Garde'] },
    { id: 2, name: 'Bob Durand', photo: '👨‍🦱', rating: 4.8, distance: '3 km', price: 20, services: ['Visite', 'Garde'] },
    { id: 3, name: 'Claire Petit', photo: '👩‍🦲', rating: 5.0, distance: '1 km', price: 30, services: ['Promenade', 'Visite'] },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="find-sitter">
      <section className="search-header">
        <h1>Trouver un pet sitter</h1>
      </section>

      <section className="search-section">
        <div className="filter-panel">
          <h3>Filtres</h3>
          
          <div className="filter-group">
            <label>Ville / Code postal</label>
            <input 
              type="text" 
              name="location" 
              placeholder="Paris, 75001..."
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-group">
            <label>Prix / heure</label>
            <div className="price-range">
              <input 
                type="number" 
                name="priceMin" 
                placeholder="Min"
                onChange={handleFilterChange}
              />
              <input 
                type="number" 
                name="priceMax" 
                placeholder="Max"
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Type de service</label>
            <select name="serviceType" onChange={handleFilterChange}>
              <option value="">Tous</option>
              <option value="promenade">Promenade</option>
              <option value="garde">Garde</option>
              <option value="visite">Visite</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Note minimale</label>
            <select name="minRating" onChange={handleFilterChange}>
              <option value="">Toutes les notes</option>
              <option value="4">4+ ⭐</option>
              <option value="4.5">4.5+ ⭐</option>
              <option value="5">5 ⭐</option>
            </select>
          </div>
        </div>

        <div className="sitters-list">
          <h2>Sitters disponibles</h2>
          <div className="sitters-grid">
            {sitters.map(sitter => (
              <div key={sitter.id} className="sitter-card">
                <div className="sitter-photo">{sitter.photo}</div>
                <h3>{sitter.name}</h3>
                <div className="sitter-info">
                  <span className="rating">⭐ {sitter.rating}</span>
                  <span className="distance">📍 {sitter.distance}</span>
                  <span className="price">{sitter.price}€/h</span>
                </div>
                <div className="services">
                  {sitter.services.map((service, idx) => (
                    <span key={idx} className="service-badge">{service}</span>
                  ))}
                </div>
                <button className="btn btn-primary">Voir profil</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FindSitter;
