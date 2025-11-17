import React from 'react';
import '../styles/Dashboard.css';

function OwnerDashboard() {
  const userData = {
    name: 'Marie Dupont',
    pets: [
      { id: 1, name: 'Luna', type: 'Chien', photo: '🐕' },
      { id: 2, name: 'Minou', type: 'Chat', photo: '🐈' }
    ],
    bookings: [
      { id: 1, sitter: 'Alice Martin', pet: 'Luna', date: '20 Nov 2024', status: 'Confirmé' },
      { id: 2, sitter: 'Bob Durand', pet: 'Minou', date: '22 Nov 2024', status: 'En attente' }
    ],
    wallet: 150.50
  };

  return (
    <div className="dashboard owner-dashboard">
      <h1>Tableau de bord Propriétaire</h1>
      
      <div className="dashboard-grid">
        <section className="dashboard-section">
          <h2>👋 Bienvenue, {userData.name}!</h2>
          <p>Gérez votre compte et vos réservations</p>
        </section>

        <section className="dashboard-section">
          <h3>Mes animaux</h3>
          <div className="pets-list">
            {userData.pets.map(pet => (
              <div key={pet.id} className="pet-card">
                <span className="pet-icon">{pet.photo}</span>
                <div>
                  <p><strong>{pet.name}</strong></p>
                  <p>{pet.type}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-secondary">Ajouter un animal</button>
        </section>

        <section className="dashboard-section">
          <h3>Réservations en cours</h3>
          <div className="bookings-list">
            {userData.bookings.map(booking => (
              <div key={booking.id} className="booking-card">
                <div className="booking-info">
                  <p><strong>{booking.sitter}</strong></p>
                  <p>{booking.pet} - {booking.date}</p>
                  <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <h3>Historique</h3>
          <button className="btn btn-secondary btn-block">Voir tout l'historique</button>
        </section>

        <section className="dashboard-section">
          <h3>💬 Messages</h3>
          <button className="btn btn-secondary btn-block">Voir les messages</button>
        </section>

        <section className="dashboard-section">
          <h3>Compte et paramètres</h3>
          <button className="btn btn-secondary btn-block">Modifier le profil</button>
          <button className="btn btn-secondary btn-block">Paramètres de sécurité</button>
        </section>
      </div>
    </div>
  );
}

export default OwnerDashboard;
