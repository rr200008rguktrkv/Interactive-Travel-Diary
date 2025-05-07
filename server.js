const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Experience = require('./models/experience');
require('./db'); // MongoDB connection
const authRoutes = require('./routes/authRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

//app.use('/api/profile', profileRoutes);
app.use('/uploads', express.static('uploads')); // To serve images statically


mongoose.connect('mongodb://localhost:27017/travel_diary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Multer config for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Static files for uploaded media
app.use('/uploads', express.static('uploads'));

// Connect DB and use routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/experience', experienceRoutes);

// POST route to upload and save an experience
app.post('/api/experiences', upload.single('media'), async (req, res) => {
  try {
    const { title, description, location, userId } = req.body;
    const mediaUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const mediaType = req.file ? req.file.mimetype : '';

    const newExperience = new Experience({
      userId,
      title,
      description,
      location,
      mediaUrl,
      mediaType
    });

    await newExperience.save();
    res.status(201).json({ message: "Experience saved!", experience: newExperience });
  } catch (error) {
    console.error("Error saving experience:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
