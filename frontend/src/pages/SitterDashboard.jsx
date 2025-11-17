import React from 'react';
import '../styles/Dashboard.css';

function SitterDashboard() {
  const userData = {
    name: 'Alice Martin',
    earnings: 1250.50,
    rating: 4.9,
    bookings: [
      { id: 1, owner: 'Marie Dupont', pet: 'Luna', date: '20 Nov 2024', service: 'Promenade', status: 'Confirmé' },
      { id: 2, owner: 'Jean Paul', pet: 'Rex', date: '22 Nov 2024', service: 'Garde', status: 'En attente' }
    ],
    pendingRequests: 3
  };

  return (
    <div className="dashboard sitter-dashboard">
      <h1>Tableau de bord Pet Sitter</h1>
      
      <div className="dashboard-grid">
        <section className="dashboard-section">
          <h2>👋 Bienvenue, {userData.name}!</h2>
          <p>Gérez vos réservations et vos revenus</p>
        </section>

        <section className="dashboard-section stats">
          <div className="stat-card">
            <h3>💰 Revenus ce mois</h3>
            <p className="stat-value">{userData.earnings}€</p>
          </div>
          <div className="stat-card">
            <h3>⭐ Votre note</h3>
            <p className="stat-value">{userData.rating}</p>
          </div>
          <div className="stat-card">
            <h3>📬 Demandes en attente</h3>
            <p className="stat-value">{userData.pendingRequests}</p>
          </div>
        </section>

        <section className="dashboard-section">
          <h3>📅 Mes réservations</h3>
          <div className="bookings-list">
            {userData.bookings.map(booking => (
              <div key={booking.id} className="booking-card">
                <div className="booking-info">
                  <p><strong>{booking.owner}</strong> - {booking.pet}</p>
                  <p>{booking.service} - {booking.date}</p>
                  <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <h3>📬 Demandes en attente</h3>
          <button className="btn btn-primary btn-block">Voir les demandes ({userData.pendingRequests})</button>
        </section>

        <section className="dashboard-section">
          <h3>💬 Messages</h3>
          <button className="btn btn-secondary btn-block">Voir les messages</button>
        </section>

        <section className="dashboard-section">
          <h3>⚙️ Gestion du profil</h3>
          <button className="btn btn-secondary btn-block">Modifier les services et tarifs</button>
          <button className="btn btn-secondary btn-block">Gérer les disponibilités</button>
          <button className="btn btn-secondary btn-block">Paramètres du compte</button>
        </section>
      </div>
    </div>
  );
}

export default SitterDashboard;
