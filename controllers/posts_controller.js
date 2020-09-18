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
posts.get('/:id/edit', (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render('posts/edit.js', {
      post: foundPost
    });
  });
});

// delete
posts.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    res.redirect('/toolow')
  });
});

// update
posts.get('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => {
    res.redirect('/toolow')
  });
});

// show
posts.get('/:id', (req, res) => {
  res.redirect('posts/show.ejs')
})

// index
posts.get('/', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/index.ejs', {
      posts: allPosts
    })
  })
})

module.exports = posts
