const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
//const multer = require('multer');
//const uploadMiddleware = multer({ dest: 'uploads/' });

const configureMiddleware = (app) => {
  const allowedOrigins = ['http://localhost:3000', 'https://repop-blog.vercel.app', 'https://repop-blog-server.onrender.com'];

  app.use(cors({
    credentials: true,
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
    
  app.use(express.json());
  app.use(cookieParser());
  app.use('/uploads', express.static(__dirname + '/uploads'));
  //app.use(uploadMiddleware.single('file'));
};

module.exports = configureMiddleware;