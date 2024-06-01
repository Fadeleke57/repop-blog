const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const configureMiddleware = (app) => {
  const allowedOrigins = ['http://localhost:3000', 'https://repop-blog.vercel.app'];

  app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }}));
    
  app.use(express.json());
  app.use(cookieParser());
  app.use('/uploads', express.static(__dirname + '/uploads'));
  app.use(uploadMiddleware.single('file'));
};

module.exports = configureMiddleware;