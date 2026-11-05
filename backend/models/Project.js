const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tech: { type: [String], required: true }, // Array of strings (e.g. ["React", "Node"])
  liveLink: { type: String, default: "#" },
  githubLink: { type: String, default: "#" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);