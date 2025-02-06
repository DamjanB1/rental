'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import './globals.css';

const Home = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true); // Loader state

  useEffect(() => {
    fetch('http://localhost:5000') // Assuming the backend is running on port 5000
      .then(response => response.text())
      .then(data => {
        setMessage(data);
        setIsLoading(false); // Hide loader when data is fetched
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false); // Hide loader even if there is an error
      });
  }, []);

  useEffect(() => {
    // Add the loaded class to trigger the slide-out animation
    if (!isLoading) {
      const loader = document.querySelector('.loader-overlay');
      if (loader) {
        loader.classList.add('loaded');
      }
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-white">
      {/* Loader visible when isLoading is true */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader">
            {/* Replace with your logo image */}
            <img src="/logo/logo2.png" alt="Logo" className="logo-image" />
            <div className="spinner"></div>
          </div>
        </div>
      )}

      {/* Hero Section with Video Background */}
      <div className="hero-container relative">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src="/more.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content on top of the video */}
        <div className="overlay-content text-center text-white">
          <h1 className="hero-title text-primary mb-6"></h1>
        </div>
      </div>

      {/* Main content below the video */}
      <div className="content-container py-16 px-6">
        {/* Boxed main content */}
        <div className="main-content-box">
          <h2 className="apartment-title">Villa Adriatica</h2>
          <p className="apartment-location">Location: Pula, Istria, Croatia</p>

          <p className="apartment-description">
            Nestled in the heart of Istria, Villa Adriatica offers a serene getaway for those seeking both relaxation and adventure. Located in the historic city of Pula, our charming apartment is just minutes away from stunning beaches, ancient Roman ruins, and vibrant local culture. Whether you’re here to enjoy the Mediterranean sunshine or explore the rich history of the region, Villa Adriatica is the perfect home base for your Croatian escape.
          </p>

          <p className="apartment-description">
            The apartment features a modern and stylish design with spacious rooms, a fully equipped kitchen, and a comfortable living area. With large windows letting in natural light and a lovely outdoor terrace, Villa Adriatica provides an inviting atmosphere for families, couples, or solo travelers looking to unwind. Enjoy breathtaking views of the Istrian countryside and the crystal-clear waters of the Adriatic Sea from your balcony.
          </p>
        </div>

        {/* Layout with left and right sections */}
        <div className="two-column-layout">
          <div className="left-column">
            <p className="apartment-description">
              <strong>The City of Pula</strong><br />
              Pula, located on the southern tip of the Istrian Peninsula, is a city steeped in history. It’s renowned for its remarkably well-preserved Roman ruins, including the iconic Pula Arena, one of the best-preserved Roman amphitheaters in the world. Pula’s rich cultural heritage is complemented by its stunning natural beauty, with lush green hills, crystal-clear beaches, and quaint streets to explore.
            </p>
          </div>

          <div className="right-column">
            <p className="apartment-description">
              <strong>History of Villa Adriatica</strong><br />
              Villa Adriatica is set in a historic building that dates back to the late 19th century. Originally a traditional Istrian farmhouse, the villa was lovingly restored in the early 2000s to preserve its authentic charm while adding modern comforts. The architecture features traditional Istrian stonework and red-tiled roofs, making it a perfect blend of old-world charm and contemporary design.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <a href="/booking" className="cta-button">Book Your Stay</a>
        </div>
      </div>
    </div>
  );
};

export default Home;