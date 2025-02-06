'use client';  // Ensure this is a client component in Next.js

import React, { useState } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [status, setStatus] = useState<string | null>(null);  // To track booking status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = { name, date, roomType };

    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setStatus(`Your booking is confirmed for ${name} on ${date}. Room type: ${roomType}.`);
        setName('');
        setDate('');
        setRoomType('');
      } else {
        setStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error booking your stay.');
    }
  };

  return (
    <div className="booking">
      <h2>Rezervirajte svoj termin</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Booking Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Booking;