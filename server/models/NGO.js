const mongoose = require('mongoose');

const Student = require('./Student');

const ngoSchema = new mongoose.Schema({
  ngoName: { type: String, required: true },
  ngoId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  students: [{
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    email: { type: String, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('NGO', ngoSchema);