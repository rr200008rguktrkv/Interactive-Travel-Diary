const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/travel_diary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ Connection error:', err);
});
