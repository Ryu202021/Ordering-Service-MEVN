// post.model.js

const express = require('express');
const restaurantRoutes = express.Router();

// Require Post model in our routes module
let Restaurant = require('../models/restaurant');

// Defined store route
restaurantRoutes.route('/add').post(function (req, res) {
  let restaurant = new Restaurant(req.body);
  restaurant.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
restaurantRoutes.route('/').get(function (req, res) {
    Restaurant.find(function(err, restaurants){
    if(err){
      res.json(err);
    }
    else {
      res.json(restaurants);
    }
  });
});

// Defined edit route
restaurantRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Restaurant.findById(id, function (err, restaurant){
      if(err) {
        res.json(err);
      }
      res.json(restaurant);
  });
});

//  Defined update route
restaurantRoutes.route('/update/:id').post(function (req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
    if (!restaurant)
      res.status(404).send("data is not found");
    else {
        restaurant.title = req.body.title;
        restaurant.body = req.body.body;
        restaurant.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
restaurantRoutes.route('/delete/:id').delete(function (req, res) {
    Restaurant.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = restaurantRoutes;