const mongoose = require('mongoose')
const User = require('./users.js')
const Comment = require('./comment.js')

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  car: { type: String, required: true },
  description: String,
  instagram: String,
  img: { type: String, required: true },
  img2: String,
  img3: String,
  comments: [Comment.schema],
  author: mongoose.ObjectId
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
