const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/users';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));


// Make All Models Available
module.exports = { 
    Users: require('./Users'),
};
