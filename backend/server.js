const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. CORS Setup (Yeh bilkul sahi hai)
app.use(cors({
  origin: 'https://fbb-portfolio-6ti7z3q7e-fouzia-bilal.vercel.app', // Aapki frontend ka link
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// 2. Routes Import (Yeh sahi hain)
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes');

// 3. API Routes (Yeh bilkul sahi hain, inhe mat chherein)
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/profile', profileRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch((err) => console.log('❌ MongoDB Connection Error: ', err));

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running perfectly!');
});

// Vercel deployment ke liye
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app;