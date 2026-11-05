const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  image: { type: String },
  description: { type: String },
  projectsCount: { type: String },
  experience: { type: String },
  responsiveDesign: { type: String }
});

module.exports = mongoose.model('Profile', profileSchema);