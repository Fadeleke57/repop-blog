const express = require('express');
const app = express();
const configureMiddleware = require('./middleware');
const db = require('./db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Configure middleware
configureMiddleware(app);

// Use routes
app.use(userRoutes);
app.use(postRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//mongodb+srv://Fadeleke:O1ZkZOJVRYo4WDOP@cluster0.dna7mv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0