const express = require('express');
const mongoose = require("mongoose");
const dishRoutes = express.Router();
let Dish = require('../models/dish');

// get dish by id
dishRoutes.route('/:id').get((req, res) => {
    Dish.findById(req.params.id).exec()
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

// get dishes by tag
dishRoutes.route('/:tag').get((req, res) => {
    Dish.find({ tags: req.params.tag }).exec()
        .then(doc => {
            if (!doc) {
                res.status(404);
            } else {
                res.status(200).json(doc); // returns an array of Dish documents
            }  
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// add dish
dishRoutes.route('/add').post((req, res) => {
    let dish = new Dish(req.body);
    dish._id = new mongoose.Types.ObjectId();
    dish.save()
        .then((doc) => {
            res.status(200).json({ 
                message: 'Dish added successfully',
                result: doc
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// edit dish by id

// delete dish by id
dishRoutes.route('/delete/:id').post((req, res) => {
    Dish.findByIdAndDelete(req.params.id).exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({ message: 'Dish deleted successfully' });
            } else {
                res.status(404).json({ message: "Invalid ID" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

module.exports = dishRoutes;