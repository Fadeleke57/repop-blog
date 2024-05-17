const mongoose = require('mongoose');

const URI = 'mongodb+srv://Fadeleke:O1ZkZOJVRYo4WDOP@cluster0.dna7mv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

if (!URI) {
  throw new Error('MONGODB_URI environment variable not defined');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });
};

connectToDatabase();

module.exports = mongoose;