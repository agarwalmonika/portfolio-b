const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['frontend', 'backend', 'tools', 'languages'], required: true },
  level: { type: Number, min: 0, max: 100, default: 80 },
  icon: String
});

module.exports = mongoose.model('Skill', skillSchema);