// backend/upload.js
const multer = require('multer');
const path = require('path');

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // File will be stored in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Unique filename using timestamp
  },
});

// Create Multer upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },  // 5MB limit
}).single('profilePic');  // 'profilePic' is the field name from the form

module.exports = upload;
