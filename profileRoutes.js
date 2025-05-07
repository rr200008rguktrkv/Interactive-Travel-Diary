const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Save Profile
router.post('/', async (req, res) => {
  try {
    const { userId, name, bio, location } = req.body;
    
    // Check if profile exists
    let profile = await Profile.findOne({ userId });
    if (profile) {
      // Update existing profile
      profile.name = name;
      profile.bio = bio;
      profile.location = location;
      await profile.save();
      return res.status(200).json(profile);
    }

    // Create new profile
    const newProfile = new Profile({ userId, name, bio, location });
    await newProfile.save();
    res.status(201).json(newProfile);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get Profile by UserId
router.get('/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
