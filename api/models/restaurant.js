// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Restaurant
let Restaurant = new Schema({
  name: {
    type: String
  },
  menu: {
    type: Array
  }
},{
    collection: 'restaurants'
});

module.exports = mongoose.model('Restaurant', Restaurant);