// config/db.js
// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://dbijesh6:asdfghjkl@elm.whkkv.mongodb.net/?retryWrites=true&w=majority&appName=ELM'); // Direct URI
//     console.log('MongoDB Connected');
//   } catch (err) {
//     console.error('MongoDB Connection Error:', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dbijesh6:asdfghjkl@elm.whkkv.mongodb.net/?retryWrites=true&w=majority&appName=ELM', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
