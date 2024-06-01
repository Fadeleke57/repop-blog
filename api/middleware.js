const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const configureMiddleware = (app) => {
  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = configureMiddleware;