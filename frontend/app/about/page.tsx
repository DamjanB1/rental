'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import './about.css';
import Navbar from '../Navbar';

const AboutUs = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));

    // Scroll Animation Trigger
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('scroll-trigger');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-us-container">
      <Navbar />
      {/* Main Header outside of content container */}
      <h1>O nama</h1>

      {/* Main Content Container */}
      <div className="main-content-box">
        <p>
          DB Resorts is a family-owned vacation rental company offering cozy and comfortable accommodations.
        </p>
        <p>
          Welcome to DB Resorts! At DB Resorts, we believe that every getaway should be a memorable one. Nestled in breathtaking locations, our vacation rental homes offer the perfect escape from the hustle and bustle of everyday life. Whether you're seeking a peaceful retreat surrounded by nature or a vibrant getaway by the beach, we have the perfect space for you.
        </p>
      </div>

      {/* Smaller Content Sections */}
      <div className="content-section">
        <h2>Our Story</h2>
        <p>
          DB Resorts was founded with the simple goal of providing a home away from home for travelers seeking comfort, luxury, and convenience...
        </p>
      </div>

      <div className="content-section">
        <h2>What We Offer</h2>
        <p>
          Our portfolio of vacation rentals includes a diverse range of properties, from cozy cottages to expansive villas...
        </p>
      </div>

      <div className="content-section">
        <h2>Why Choose Us?</h2>
        <p>
          Prime Locations: Our properties are strategically located in some of the most sought-after vacation destinations...
        </p>
      </div>

      <div className="content-section">
        <h2>Our Mission</h2>
        <p>
          At DB Resorts, our mission is to offer guests a unique and enriching vacation experience by providing beautiful properties...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;