const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes Import
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); // Yeh zaroori hai JSON data read karne ke liye

app.use('/api/contact', contactRoutes); // Contact routes ko use karne ke liye
app.use('/api/projects', projectRoutes); 
app.use('/api/blogs', require('./routes/blogRoutes')); // Blog routes ko use karne ke liye
app.use('/api/profile', require('./routes/profileRoutes')); // Profile routes ko use karne ke liye

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch((err) => console.log('❌ MongoDB Connection Error: ', err));

// API Routes
app.use('/api/contact', contactRoutes); // Yahan humne contact ka rasta banaya
app.use('/api/projects', projectRoutes); // Yahan humne projects ka rasta banaya
app.use('/api/blogs', require('./routes/blogRoutes')); // Yahan humne blogs ka rasta banaya
app.use('/api/profile', require('./routes/profileRoutes')); // Yahan humne profile ka rasta banaya
// Test route
app.get('/', (req, res) => {
  res.send('Backend is running perfectly!');
});
 
//Vercel ke liye server ko export karna
if(process.env.NODE_ENV === 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server is running in production mode on port ${PORT}`));
}

// Vercel ke liye server ko export karna
 module.exports = app;  