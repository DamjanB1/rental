'use client'

import { useEffect, useState } from 'react';
import React from 'react';
import './rental.css';

const Rental = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Fetch message from the server
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));

    // IntersectionObserver for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });

    // Target sections for animation
    const sections = document.querySelectorAll('.feature-boxes, .pricing-section, .gallery-container');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="smjestaj-container">
      <h1 className="smjestaj-title">Garancija vrhunske kvalitete</h1>
      <p className="smjestaj-description">
        Sve naše vile su osobno pregledane, a domaćini pažljivo odabrani kako bismo vam pružili izvanredan smještaj i nezaboravno gostoprimstvo.
      </p>

      <div className="feature-boxes">
        <div className="feature-box">
          <h3>Full Service podrška</h3>
          <p>
            Tim IstriaLux stoji vam na raspolaganju od prvog kontakta, kroz planiranje putovanja i tijekom cijelog boravka.
          </p>
        </div>
        <div className="feature-box">
          <h3>Otkrijte destinaciju</h3>
          <p>
            Naš tim stručnjaka posvećen je vašem nezaboravnom odmoru, vodeći vas do skrivenih dragulja destinacije po povoljnim cijenama.
          </p>
        </div>
        <div className="feature-box">
          <h3>5% popusta na povratak</h3>
          <p>
            Svi naši gosti ostvaruju 5% popusta na svaku buduću rezervaciju, za bilo koju vilu iz našeg portfelja.
          </p>
        </div>
      </div>

      <div className="villa-description">
        <p>
          Naša vila je savršen odabir za one koji žele uživati u luksuzu i udobnosti. S modernim sadržajem i nevjerojatnim
          pogledom, idealna je za obiteljski odmor ili opuštanje s prijateljima.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2 className="pricing-title">Cijene i Opcije</h2>
        <div className="pricing-container">
          <div className="pricing-option">
            <h3>Standard</h3>
            <p className="price">€150 - €250 / noć</p>
          </div>
          <div className="pricing-option">
            <h3>Deluxe</h3>
            <p className="price">€250 - €350 / noć</p>
          </div>
          <div className="pricing-option">
            <h3>Suite</h3>
            <p className="price">€350 - €500+ / noć</p>
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button">Rezervirajte sada</button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <h2 className="gallery-title">Galerija</h2>
        <div className="gallery">
          <img src="/villa_images/vila1.jpg" alt="Villa Image 1" />
          <img src="/villa_images/vila2.jpg" alt="Villa Image 2" />
          <img src="/villa_images/vila3.jpg" alt="Villa Image 3" />
          <img src="/villa_images/vila4.jpg" alt="Villa Image 4" />
          <img src="/villa_images/vila5.png" alt="Villa Image 5" />
          <img src="/villa_images/vila6.jpg" alt="Villa Image 6" />
        </div>
      </div>
    </div>
  );
};

export default Rental;