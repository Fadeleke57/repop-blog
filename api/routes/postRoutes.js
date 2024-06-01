const express = require('express');
const router = express.Router();
const fs = require('fs');
const Post = require('../models/Post');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/post', authenticateToken, async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  const { title, summary, content } = req.body;
  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover: newPath,
    author: req.user.id,
  });
  res.json(postDoc);
});

router.get('/post', async (req, res) => {
  const posts = await Post.find()
    .populate('author', ['username'])
    .sort({ createdAt: -1 })
    .limit(20);

  res.json(posts);
});

router.put('/post', authenticateToken, async (req, res) => {
  let newPath = null;

  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  }

  const { id, title, summary, content } = req.body;
  const postDoc = await Post.findById(id);
  const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(req.user.id);
  if (!isAuthor) {
    return res.status(400).json('INVALID PERMISSION');
  }

  postDoc.title = title;
  postDoc.summary = summary;
  postDoc.content = content;
  postDoc.cover = newPath ? newPath : postDoc.cover;

  await postDoc.save();
  res.json(postDoc);
});

router.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});

module.exports = router;