var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Donate = require('../models/donate');
var Movement = require('../models/movement');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var verifyToken = require('../middleware/auth');
var async = require("async");
var nodemailer = require("nodemailer");
//======================================
//@only for admin
//======================================
router.post('/', (req, res, next) => {
    var movement = new Movement({
        title: req.body.title,
        address: req.body.address,
        contact: req.body.contact,
        description: req.body.description,
        duration: req.body.duration,
        timings: req.body.timings
    });
    movement.save().then(data => {
            res.status(200).json({
                success: true,
                data: data
            });
        })
        .catch(err => {
            res.status(501).json({
                success: false,
                error: "Unable to Create Movement"
            });
        });
});


router.get('/', (req, res, next) => {
    Movement.find({})
        .then(data => {
            res.status(200).json({
                success: true,
                data: data
            });
        })
        .catch(err => {
            res.status(200).json({
                success: false,
                error: "No Movements Found"
            });
        });
});
module.exports = router;