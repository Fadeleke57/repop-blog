// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();
const salt = bcrypt.genSaltSync(10);
const secret = process.env.REACT_APP_SECRET_HASH;

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(400).json('Invalid Credentials');
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict'}).json({
          id: userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('Invalid Credentials');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/profile', authenticateToken, (req, res) => {
  res.json(req.user);
});

router.post('/logout', (req, res) => {
  res.cookie('token', '', { httpOnly: true, secure: true, sameSite: 'strict' }).json('ok');
});

module.exports = router;