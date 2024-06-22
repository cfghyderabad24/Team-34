const mongoose = require('mongoose');

const volSchema = new mongoose.Schema({
    volName: { type: String, required: true },
    volId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('VOL', volSchema);
