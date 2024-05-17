const mongoose = require('mongoose');
URI = 'mongodb+srv://Fadeleke:O1ZkZOJVRYo4WDOP@cluster0.dna7mv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;