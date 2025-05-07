const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Board = require('./Models/Boards'); // Import Board model
const Task = require('./Models/Tasks'); // Import Task model

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/taskmanager';
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes

// Get all boards
app.get('/api/boards', async (req, res) => {
  try {
    const boards = await Board.find().populate('tasks');
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch boards' });
  }
});