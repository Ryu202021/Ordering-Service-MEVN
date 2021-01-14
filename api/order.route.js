// post.model.js

const express = require('express');
const orderRoutes = express.Router();

// Require Post model in our routes module
let Order = require('./order.model');

// Defined store route
orderRoutes.route('/add').post(function (req, res) {
  let order = new Order(req.body);
  order.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

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
        order.title = req.body.title;
        order.body = req.body.body;
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