const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const configureMiddleware = (app) => {
  app.use(cors({ credentials: true, origin: 'https://repop-blog-server.onrender.com/' }));
  app.use(express.json());
  app.use(cookieParser());
  app.use('/uploads', express.static(__dirname + '/uploads'));
  app.use(uploadMiddleware.single('file'));
};

module.exports = configureMiddleware;