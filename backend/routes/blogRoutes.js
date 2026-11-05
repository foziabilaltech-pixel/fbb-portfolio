const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// 1. GET: Saare blogs dekhne ke liye
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

// 2. POST: Naya blog add karne ke liye
router.post('/', async (req, res) => {
  try {
    const { title, category, excerpt, content, image } = req.body;
    const newBlog = new Blog({ title, category, excerpt, content, image });
    await newBlog.save();
    res.status(201).json({ message: 'Blog added successfully!', blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add blog' });
  }
});

// 3. DELETE: Blog delete karne ke liye
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete blog' });
  }
});

module.exports = router;