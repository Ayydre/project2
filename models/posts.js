const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  car: { type: String, required: true },
  decription: String,
  img: { type: String, required: true },
  img2: String,
  img3: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
