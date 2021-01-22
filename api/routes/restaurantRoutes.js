const express = require('express');
const restaurantRoutes = express.Router();
let Restaurant = require('../models/restaurant');
let Dish = require('../models/dish');

// add restaurant
restaurantRoutes.route('/add').post(function (req, res) {
  let restaurant = new Restaurant(req.body);
  console.log(restauarant);
  restaurant.save()
    .then(() => {
      res.status(200).json({ 'restaurant': 'restaurant added successfully' });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});
// edit restaurant

// delete restaurant
restaurantRoutes.route('/delete/:id').delete(function (req, res) {
  Restaurant.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

// add dish to restaurant
restaurantRoutes.route('/:id/addDish').post((req, res) => {
  Restaurant.findById(req.params.id).exec() // find restaurant
    .then(doc => {
      if (doc) {
        Dish.findById(req.body.dishId).exec() // find dish by id
          .then(dish => {
            doc.menu.push(dish); // add dish to menu
            doc.save()
              .then(() => {
                res.status(200).json({ message: "Added dish" });
              })
              .catch(() => {
                res.status(400).send("unable to save to database");
              });
          });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// remove dish from restaurant
restaurantRoutes.route('/:id/removeDish').post((req, res) => {
  Restaurant.findById(req.params.id).exec() // find restaurant
    .then(doc => {
      if (doc) {
        Dish.findById(req.body.dishId).exec() // find dish by id
          .then(dish => {
            doc.menu.remove(dish); // remove dish from menu
            doc.save()
              .then(() => {
                res.status(200).json({ message: "Removed dish" });
              })
              .catch(() => {
                res.status(400).send("unable to save to database");
              });
          });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// get restaurant dishes by id
restaurantRoutes.route('/:id/dishes').get((req, res) => {
  Restaurant.findById(req.params.id).exec()
    .then(doc => {
      if (doc) {
        var dishes = doc.menu;
        res.status(200).json(dishes);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// get restaurant dishes by tags

// get all restaurants
restaurantRoutes.route('/restaurants').get(function (req, res) {
  Restaurant.find().populate('menu')
    .exec((err, restaurants) => {
      if (err) {
        res.json(err);
      }
      else {
        console.log(restaurants);
        res.json(restaurants);
      }
    });
});

// get restaurant by id
restaurantRoutes.route('/:id').get((req, res) => {
  Restaurant.findById(req.params.id).populate('menu').exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = restaurantRoutes;