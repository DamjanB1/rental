import express from 'express';
import cors from 'cors';  // <-- Import CORS

const app = express();
const port = 5000;

// Enable CORS for all origins
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

// Contact form submission route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle the contact form submission (store in DB, email, etc.)
  console.log('Received contact form:', { name, email, message });
  res.status(200).send({ message: 'Contact message received!' });
});

// Booking form submission route
app.post('/book', (req, res) => {
  const { name, date, roomType } = req.body;
  // Handle the booking form submission (store in DB, process payment, etc.)
  console.log('Received booking:', { name, date, roomType });
  res.status(200).send({ message: 'Booking confirmed!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});