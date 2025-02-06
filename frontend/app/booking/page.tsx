'use client';

import Booking from '../../components/Booking';
import './booking.css';

const BookingPage = () => {
  return (
    <div>
      <Booking />
      <div className="map-container">
        <h2 className="map-title">Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.8184626310754!2d15.803686958101663!3d45.85493243126277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765cfa31182a1a3%3A0x1ca065e067e3f0c8!2sKodrmanova!5e0!3m2!1shr!2shr!4v1738696389058!5m2!1shr!2shr"
          width="100%" // You can change the width as per your design preference
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true} // Corrected to boolean true
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingPage;