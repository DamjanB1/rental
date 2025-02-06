'use client';

import React, { useState, useEffect } from 'react';
import './navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsHidden(true);
    } else {
      // Scrolling up
      setIsHidden(false);
    }

    setLastScrollY(window.scrollY);

    // Update scroll state for navbar color change
    const videoElement = document.querySelector('video');
    if (videoElement) {
      const videoBottom = videoElement.getBoundingClientRect().bottom;
      setIsScrolled(videoBottom <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="logo">
        <img src="/logo/logo2.png" alt="DB Resorts Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Links (only show when isMenuOpen is true) */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Početna</a></li>
        <li><a href="/about">O nama</a></li>
        <li><a href="/rental">Smještaj</a></li>
        <li><a href="/contact">Kontakt</a></li>
        <li><a href="/booking">Rezervirajte svoj termin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;