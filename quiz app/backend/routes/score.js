// routes/scores.js
const express = require('express');
const Score = require('../models/Score');
const router = express.Router();

// Submit test and calculate score
router.post('/submit', async (req, res) => {
  const { userId, testId, responses } = req.body;
  try {
    const test = await Test.findById(testId);
    let score = 0;
    responses.forEach((response, index) => {
      if (response.selectedOption === test.questions[index].correctAnswer) score++;
    });
    const newScore = new Score({ userId, testId, score, responses });
    await newScore.save();
    res.status(201).json({ message: 'Test submitted successfully', score });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get leaderboard for a specific test
router.get('/leaderboard/:testId', async (req, res) => {
  const { testId } = req.params;
  try {
    const leaderboard = await Score.aggregate([
      { $match: { testId: mongoose.Types.ObjectId(testId) } },
      { $group: { _id: "$userId", totalScore: { $max: "$score" } } },
      { $sort: { totalScore: -1 } },
      { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } }
    ]);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;