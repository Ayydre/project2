const express = require('express')
const Post = require('../models/posts.js')
const postSeed = require('../models/seed.js')
const posts = express.Router()

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

// seed
posts.get('/seed', (req, res) => {
  Post.create(postSeed, (error, data) => {
    res.redirect('/toolow')
  });
});

// new
posts.get('/new', isAuthenticated, (req, res) => {
  res.render(
    'posts/new.ejs',
    {currentUser: req.session.currentUser}
  )
});

// edit
posts.get('/:id/edit', isAuthenticated, (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render('posts/edit.ejs', {
      posts: foundPost,
      currentUser: req.session.currentUser
    });
  });
});

// delete
posts.delete('/:id', isAuthenticated, (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    res.redirect('/toolow')
  });
});

// forum page
posts.get('/forum', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/forum.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

// About page
posts.get('/about', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/about.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

// Contact page
posts.get('/contact', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/contact.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

// show shirt
posts.get('/show/shirt', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/show-shirt.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

// show sticker
posts.get('/show/sticker', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/show-sticker.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

// show
posts.get('/:id', (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render(
      'posts/show.ejs', {
        posts: foundPost,
        currentUser: req.session.currentUser
    })
  })
})

// update
posts.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => {
    res.redirect('/toolow/' + req.params.id)
  });
});

// create
posts.post('/', (req, res) => {
  Post.create(req.body, (error, createdPost) => {
    res.redirect('/toolow/forum')
  })
})

// index
posts.get('/', (req, res) => {
  Post.find({}, (error, allPosts) => {
    res.render('posts/index.ejs', {
      posts: allPosts,
      currentUser: req.session.currentUser
    })
  })
})

module.exports = posts
