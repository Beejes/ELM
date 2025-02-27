// models/Test.js
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  // title: { type: String, required: true },
  // description: { type: String },
  // duration: { type: Number, required: true }, // in minutes
  questions: [{
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true } // index of correct option ma change garnu ni milxa but string used for one set
  }],
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', testSchema);