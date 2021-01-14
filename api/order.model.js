// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Order = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'Orders'
});

module.exports = mongoose.model('Order', Order);