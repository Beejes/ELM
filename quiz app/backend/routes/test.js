// routes/tests.js
const express = require('express');
const Test = require('../models/Test');
const router = express.Router();

// Create a new test (Admin only)
router.post('/create', async (req, res) => {
  const { title, description, duration, questions, createdBy } = req.body;
  try {
    const test = new Test({ title, description, duration, questions, createdBy });
    await test.save();
    res.status(201).json({ message: 'Test created successfully', test });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tests
router.get('/', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;