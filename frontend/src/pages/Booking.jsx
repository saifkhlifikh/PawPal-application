import React, { useState } from 'react';
import '../styles/Booking.css';

function Booking() {
  const [bookingData, setBookingData] = useState({
    sitter: 'Alice Martin',
    pet: 'Luna',
    date: '2024-11-20',
    duration: '2',
    service: 'promenade',
    totalPrice: 50
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleConfirmBooking = () => {
    alert('Réservation confirmée!');
  };

  return (
    <div className="booking-container">
      <h1>Confirmer votre réservation</h1>

      <div className="booking-grid">
        <section className="booking-summary">
          <h2>Récapitulatif</h2>
          
          <div className="summary-item">
            <span>Pet sitter:</span>
            <strong>{bookingData.sitter}</strong>
          </div>
          
          <div className="summary-item">
            <span>Animal:</span>
            <strong>{bookingData.pet}</strong>
          </div>
          
          <div className="summary-item">
            <span>Date:</span>
            <strong>{new Date(bookingData.date).toLocaleDateString('fr-FR')}</strong>
          </div>
          
          <div className="summary-item">
            <span>Durée:</span>
            <strong>{bookingData.duration}h</strong>
          </div>
          
          <div className="summary-item">
            <span>Service:</span>
            <strong className="capitalize">{bookingData.service}</strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item total">
            <span>Total:</span>
            <strong>{bookingData.totalPrice}€</strong>
          </div>
        </section>

        <section className="booking-payment">
          <h2>Mode de paiement</h2>
          
          <div className="payment-options">
            <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="card" 
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              💳 Carte bancaire
            </label>
            
            <label className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="paypal" 
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            
            <label className={`payment-option ${paymentMethod === 'wallet' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="wallet" 
                checked={paymentMethod === 'wallet'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              💰 Portefeuille PawPal
            </label>
          </div>

          {paymentMethod === 'card' && (
            <div className="payment-form">
              <div className="form-group">
                <label>Numéro de carte</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiration</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>
          )}

          <button 
            onClick={handleConfirmBooking}
            className="btn btn-primary btn-large btn-block"
          >
            Confirmer la réservation
          </button>

          <p className="security-note">
            🔒 Paiement sécurisé. Confirmation par email sera envoyée.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Booking;
