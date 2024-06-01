const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const express = require('express');
const app = express();

app.use(upload.single('file'));

app.post('/api/upload', (req, res) => {
  if (req.file) {
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  } else {
    res.status(400).json({ message: 'File upload failed' });
  }
});

module.exports = app;