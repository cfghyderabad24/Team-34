const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    ngoName: { type: String, required: true },
    ngoId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    students: [{
        email: { type: String, required: true, ref: 'Student' }
    }]
}, { timestamps: true });

module.exports = mongoose.model('NGO', ngoSchema);
