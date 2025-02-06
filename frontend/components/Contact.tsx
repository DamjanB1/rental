'use client';  // Ensure this is a client component in Next.js

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);  // To track form submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact">
      <h2>Javite nam se za više informacija!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Ime</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Poruka</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pošalji</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;