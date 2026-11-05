const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); 

// POST (Data save karna)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET (Data dekhna)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch' });
  }
});

// DELETE (Data delete karna) - YEH NAYA HAI
router.delete('/:id', async (req, res) => {
  try {
    const deletedMsg = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedMsg) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete' });
  }
});

module.exports = router;