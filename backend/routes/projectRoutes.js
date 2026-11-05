const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// 1. GET: Saare projects dekhne ke liye
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// 2. POST: Naya project add karne ke liye
router.post('/', async (req, res) => {
  try {
    const { title, description, image, tech, liveLink, githubLink } = req.body;
    const newProject = new Project({ title, description, image, tech, liveLink, githubLink });
    await newProject.save();
    res.status(201).json({ message: 'Project added successfully!', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add project' });
  }
});

// 3. DELETE: Project delete karne ke liye
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;