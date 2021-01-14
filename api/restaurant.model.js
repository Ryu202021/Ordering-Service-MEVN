// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Restaurant = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'restaurants'
});

module.exports = mongoose.model('Restaurant', Restaurant);