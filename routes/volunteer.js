// ===
// === === === === === === === === === === === === === === === ===
var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Donate = require('../models/donate');
var Volunteer = require('../models/volunteer');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var verifyToken = require('../middleware/auth');
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

//=============================================
//Post volunteering
//=============================================
router.post('/', (req, res, next) => {
    var volunteer = new Volunteer({
        category: req.body.category,
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        description: req.body.description,
    });

    volunteer.save().then(data => {
            res.status(200).json({
                success: true,
                data: data
            });
        })
        .catch(err => {
            res.status(501).json({
                success: false,
                error: "Unable to Submit Volnteer form"
            });
        });
});

// router.get('/:CatId',(req,res,next)=>{

// })
module.exports = router;
// ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ +