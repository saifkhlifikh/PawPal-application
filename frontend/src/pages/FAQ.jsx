import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Comment réserver un pet sitter?',
      answer: 'Consultez notre liste de pet sitters, consultez les profils, et cliquez sur "Réserver". Remplissez les détails de votre demande et confirmez la réservation avec le paiement.'
    },
    {
      id: 2,
      question: 'Comment devenir pet sitter?',
      answer: 'Cliquez sur "Devenir pet sitter", créez un profil, ajoutez vos services et tarifs. Notre équipe vérifiera votre profil avant de pouvoir accepter des demandes.'
    },
    {
      id: 3,
      question: 'Comment sont gérés les paiements?',
      answer: 'Les paiements sont traités de manière sécurisée via notre plateforme. Les propriétaires paient à la confirmation, et les sitters reçoivent le paiement après le service.'
    },
    {
      id: 4,
      question: 'Quelle est la politique de sécurité?',
      answer: 'Tous les pet sitters sont vérifiés et assurés. Nous utilisons des chiffrement SSL et les données sont stockées de manière sécurisée.'
    },
    {
      id: 5,
      question: 'Y a-t-il une assurance?',
      answer: 'Oui, tous les services sont couverts par notre assurance responsabilité civile. Les propriétaires et les sitters sont protégés en cas d\'incident.'
    },
    {
      id: 6,
      question: 'Comment annuler une réservation?',
      answer: 'Vous pouvez annuler jusqu\'à 24 heures avant le service pour obtenir un remboursement complet. Les annulations tardives peuvent entraîner des frais.'
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="faq-container">
      <section className="faq-header">
        <h1>Questions Fréquemment Posées</h1>
        <p>Trouvez les réponses à vos questions sur PawPal</p>
      </section>

      <section className="faq-list">
        {faqs.map(faq => (
          <div 
            key={faq.id} 
            className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFaq(faq.id)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
            </button>
            {expandedFaq === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default FAQ;
