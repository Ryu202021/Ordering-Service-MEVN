const express = require('express');
const restaurantRoutes = express.Router();
let Restaurant = require('../models/restaurant');

// add restaurant
restaurantRoutes.route('/add').post(function (req, res) {
    let restaurant = new Restaurant(req.body);
    console.log(restauarant);
    restaurant.save()
      .then(() => {
        res.status(200).json({'restaurant': 'restaurant added successfully'});
      })
      .catch(() => {
        res.status(400).send("unable to save to database");
      });
  });
// edit restaurant

// delete restaurant
restaurantRoutes.route('/delete/:id').delete(function (req, res) {
    Restaurant.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
// add dish to restaurant

// remove dish from restaurant

// get restaurant dishes

// get restaurant dishes by tags

// get all restaurants
restaurantRoutes.route('/restaurants').get(function (req, res) {
    Restaurant.find(function(err, restaurants){
    if(err){
      res.json(err);
    }
    else {
      res.json(restaurants);
    }
  });
});
// get restaurant by id

module.exports = restaurantRoutes;