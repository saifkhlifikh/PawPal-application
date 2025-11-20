import React from 'react';
import '../styles/Legal.css';

function Legal() {
  return (
    <div className="legal-container">
      <h1>Mentions légales</h1>

      <section className="legal-section">
        <h2>Conditions Générales d'Utilisation</h2>
        <h3>1. Objet</h3>
        <p>
          PawPal est une plateforme mettant en relation les propriétaires d'animaux avec 
          des pet sitters. L'utilisation de la plateforme est soumise aux présentes CGU.
        </p>

        <h3>2. Inscription et Comptes</h3>
        <p>
          Pour utiliser PawPal, vous devez créer un compte avec des informations exactes 
          et à jour. Vous êtes responsable du maintien de la confidentialité de vos identifiants.
        </p>

        <h3>3. Services</h3>
        <p>
          PawPal met à disposition une plateforme de mise en relation. Les services sont 
          fournis directement entre les propriétaires et les sitters.
        </p>

        <h3>4. Responsabilité</h3>
        <p>
          PawPal décline toute responsabilité en cas de litige direct entre les utilisateurs. 
          Tous les services sont couverts par une assurance responsabilité civile.
        </p>

        <h3>5. Paiements</h3>
        <p>
          Les paiements sont traités de manière sécurisée. Les frais de plateforme sont 
          appliqués conformément aux tarifs affichés.
        </p>
      </section>

      <section className="legal-section">
        <h2>Politique de Confidentialité</h2>
        <h3>1. Données collectées</h3>
        <p>
          Nous collectons vos informations personnelles, de paiement, et de localisation 
          pour fournir nos services.
        </p>

        <h3>2. Utilisation des données</h3>
        <p>
          Vos données sont utilisées uniquement pour fournir les services PawPal. 
          Elles ne sont jamais vendues à des tiers.
        </p>

        <h3>3. Sécurité</h3>
        <p>
          Vos données sont cryptées et stockées sur des serveurs sécurisés. 
          Nous mettons en œuvre les meilleures pratiques de sécurité.
        </p>

        <h3>4. Droits des utilisateurs</h3>
        <p>
          Vous avez le droit d'accéder, modifier, ou supprimer vos données personnelles 
          à tout moment.
        </p>
      </section>

      <section className="legal-section">
        <h2>Politique des Données</h2>
        <h3>Conservation des données</h3>
        <p>
          Les données sont conservées tant que votre compte est actif. 
          Après suppression du compte, elles sont effacées dans un délai de 30 jours.
        </p>

        <h3>Cookies</h3>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience. 
          Vous pouvez modifier vos préférences de cookies dans les paramètres de votre navigateur.
        </p>

        <h3>Tiers</h3>
        <p>
          Vos données peuvent être partagées avec nos partenaires de paiement 
          et d'assurance uniquement pour traiter vos transactions.
        </p>
      </section>

      <section className="legal-contact">
        <h3>Questions ou réclamations?</h3>
        <p>Contactez-nous à: <strong>privacy@pawpal.com</strong></p>
      </section>
    </div>
  );
}

export default Legal;
