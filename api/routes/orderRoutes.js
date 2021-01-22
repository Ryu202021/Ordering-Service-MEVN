const express = require('express');
const orderRoutes = express.Router();
const mongoose = require("mongoose");
let Order = require('../models/order').Order;
let DishOrder = require('../models/order').DishOrder;
let Dish = require('../models/dish');

// Defined store route
orderRoutes.route('/add').post(function (req, res) {
  console.log(req.body.dishes);
  let order = new Order();
  order.dishes = req.body.dishes;
  order.dateOrdered = new Date();
  console.log("order: " + order);
  order.save()
    .then(() => {
      res.status(200).json({'order': 'order in added successfully'});
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

// add dish to order
orderRoutes.route('/:id/addDish/:dishId').post((req, res) => {
  Order.findById(req.params.id).exec() // find order
    .then(doc => {
      if (doc) {
        Dish.findById(req.params.dishId).exec() // find dish by id
          .then(dish => {
            let dishOrder = {};
            dishOrder.dish = dish;
            dishOrder.quantity = req.body.quantity;
            console.log(dishOrder);
            doc.dishes.push(new DishOrder(dishOrder));
            doc.save()
              .then(() => {
                res.status(200).json({ message: "Added dish" });
              })
              .catch(err => {
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

// remove dish from order
// orderRoutes.route('/:id/removeDish/:dishId').post((req, res) => {
//   Order.findById(req.params.id).exec() // find order
//     .then(doc => {
//       if (doc) {
//         Dish.findById(req.params.dishId).exec() // find dish by id
//           .then(dish => {
//             doc.dishes.remove(dish); // remove dish from order dishes
//             doc.save()
//               .then(() => {
//                 res.status(200).json({ message: "Removed dish" });
//               })
//               .catch(() => {
//                 res.status(400).send("unable to save to database");
//               });
//           });
//       } else {
//         res.status(404).json({ message: "Invalid ID" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ error: err });
//     });
// });

// Defined get data(index or listing) route
orderRoutes.route('/').get(function (req, res) {
    Order.find(function(err, orders){
    if(err){
      res.json(err);
    }
    else {
      res.json(orders);
    }
  });
});

// Defined edit route
orderRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Order.findById(id, function (err, order){
      if(err) {
        res.json(err);
      }
      res.json(order);
  });
});

//  Defined update route
orderRoutes.route('/update/:id').post(function (req, res) {
    Restaurant.findById(req.params.id, function(err, order) {
    if (!order)
      res.status(404).send("data is not found");
    else {
        order = res.json;
        order.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
orderRoutes.route('/delete/:id').delete(function (req, res) {
    Order.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = orderRoutes;