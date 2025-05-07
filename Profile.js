/*const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Profile', ProfileSchema);
*/
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // userId is unique
  name: { type: String, required: true },
  bio: { type: String },
  location: { type: String },
}, { timestamps: true }); // adds createdAt and updatedAt timestamps

module.exports = mongoose.model('Profile', ProfileSchema);
