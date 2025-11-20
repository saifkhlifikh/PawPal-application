import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SitterProfile.css';

function SitterProfile() {
  const { id } = useParams();

  const sitter = {
    id: 1,
    name: 'Alice Martin',
    photo: '👩‍🦰',
    rating: 4.9,
    reviews: 28,
    bio: 'Passionnée par les animaux depuis l\'enfance. Plus de 5 ans d\'expérience en garde et promenade.',
    experience: '5+ ans',
    skills: ['Chiens', 'Chats', 'NAC'],
    services: [
      { name: 'Promenade', price: 25, duration: '30-60 min' },
      { name: 'Garde à domicile', price: 40, duration: '4h+' },
      { name: 'Visite', price: 15, duration: '15-30 min' }
    ],
    availability: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    reviews_list: [
      { author: 'Marie D.', text: 'Excellente expérience! Alice a très bien s\'occupé de mon chien.', rating: 5 },
      { author: 'Jean P.', text: 'Très professionnel et fiable.', rating: 5 }
    ]
  };

  return (
    <div className="sitter-profile">
      <section className="profile-header">
        <div className="profile-info">
          <div className="profile-photo">{sitter.photo}</div>
          <div className="profile-details">
            <h1>{sitter.name}</h1>
            <div className="rating-info">
              <span>⭐ {sitter.rating} ({sitter.reviews} avis)</span>
            </div>
            <p className="bio">{sitter.bio}</p>
            <p><strong>Expérience:</strong> {sitter.experience}</p>
          </div>
        </div>
      </section>

      <section className="profile-content">
        <div className="content-grid">
          <div className="content-section">
            <h2>Compétences</h2>
            <div className="skills">
              {sitter.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>

            <h2>Services proposés</h2>
            <div className="services">
              {sitter.services.map((service, idx) => (
                <div key={idx} className="service">
                  <h4>{service.name}</h4>
                  <p>{service.duration} - {service.price}€</p>
                </div>
              ))}
            </div>

            <h2>Disponibilités</h2>
            <div className="availability">
              {sitter.availability.map((day, idx) => (
                <span key={idx} className="availability-badge">{day}</span>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2>Avis des clients</h2>
            <div className="reviews">
              {sitter.reviews_list.map((review, idx) => (
                <div key={idx} className="review">
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author">- {review.author} ⭐ {review.rating}</p>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-large">Réserver</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SitterProfile;
