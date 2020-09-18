const express = require('express')
const Post = require('../models/posts.js')
const postSeed = require('../models/seed.js')
const posts = express.Router()

// seed
posts.get('/seed', (req, res) => {
  Post.create(postSeed, (error, data) => {
    res.redirect('/toolow')
  });
});

// new
posts.get('/new', (req, res) => {
  res.render('posts/new.ejs')
});

// edit
post.get('/:id/edit', (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render('posts/edit.js', {
      post: foundPost
    });
  });
});

// delete
post.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    res.redirect('/toolow')
  });
});

// update
post.get('/:id', )
