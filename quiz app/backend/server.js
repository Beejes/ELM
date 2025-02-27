// /// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth');
// const scoreRoutes = require('./routes/score');
// const testRoutes = require('./routes/test');
// const cors = require('cors');

// require('dotenv').config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/score', scoreRoutes);
// app.use('/api/test', testRoutes);

// // Add this route
// app.get('/', (req, res) => {
//   res.send('Quiz App API Created 1');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





// server.js
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js'; // Adjust path if necessary
import authRoutes from './routes/auth.js'; // Adjust path if necessary
import scoreRoutes from './routes/score.js'; // Adjust path if necessary
import testRoutes from './routes/test.js'; // Adjust path if necessary
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/score', scoreRoutes);
app.use('/api/test', testRoutes);

// Add this route
app.get('/', (req, res) => {
  res.send('Quiz App API Created 1');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});