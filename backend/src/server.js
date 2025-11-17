import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoConnect from './config/db.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
mongoConnect();

// Routes
app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth API' });
});

app.use('/api/users', (req, res) => {
  res.json({ message: 'Users API' });
});

app.use('/api/sitters', (req, res) => {
  res.json({ message: 'Sitters API' });
});

app.use('/api/bookings', (req, res) => {
  res.json({ message: 'Bookings API' });
});

app.use('/api/messages', (req, res) => {
  res.json({ message: 'Messages API' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`PawPal API running on port ${PORT}`);
});
