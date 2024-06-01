// middleware/authenticateToken.js
const jwt = require('jsonwebtoken');
const secret = process.env.REACT_APP_SECRET_HASH;

const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.sendStatus(401); // No token

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;