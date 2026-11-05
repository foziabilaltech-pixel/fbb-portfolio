const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Data lene ke liye
router.get('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      // Agar database khali hai, toh default data bhej dein
      profile = new Profile({
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        description: "I'm Fouzia Bilal, a passionate Full-Stack Developer from Pakistan. I build modern, responsive web applications.",
        projectsCount: "5+",
        experience: "1+",
        responsiveDesign: "100%"
      });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
});

// Data update karne ke liye
router.put('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, req.body, { new: true });
    } else {
      profile = new Profile(req.body);
      await profile.save();
    }
    res.json({ message: "Profile Updated!", profile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

module.exports = router;