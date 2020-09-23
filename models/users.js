const mongoose = require('mongoose')
const Post = require('./posts.js')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: String,
  posts: [Post.schema]
});

const User = mongoose.model('User', userSchema)

module.exports = User
