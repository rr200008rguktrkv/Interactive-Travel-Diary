// backend/routes/experienceRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Experience = require('../models/experience');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// POST: Upload experience with media
router.post('/', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const newExperience = new Experience({
      title,
      description,
      userId,
      imageUrl: req.files['image'] ? `/uploads/${req.files['image'][0].filename}` : null,
      videoUrl: req.files['video'] ? `/uploads/${req.files['video'][0].filename}` : null,
    });

    await newExperience.save();
    res.status(201).json({ message: 'Experience uploaded successfully', experience: newExperience });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: All experiences
/*router.get('/all', async (req, res) => {
  try {
    const experiences = await Experience.find().populate('userId', 'username');
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences' });
  }
});

module.exports = router;
*/
// routes/experienceRoutes.js

// GET: All experiences
router.get('/', async (req, res) => {  // Change the endpoint to '/api/experiences'
  try {
    const experiences = await Experience.find().populate('userId', 'username');  // Populate username of the user
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences' });
  }
});

module.exports = router;

