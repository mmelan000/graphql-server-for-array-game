const mongoose = require('mongoose');

console.log(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/arRayDB');

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/arRayDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
