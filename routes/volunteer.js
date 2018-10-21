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
router.post('/:catId', (req, res, next) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'webdev3211@gmail.com',
            pass: 'simplepassword'
        }
    });




    var volunteer = new Volunteer({
        category: req.params.catId,
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        description: req.body.description
    });
    volunteer.save().then(data => {

            var mailOptions = {
                from: 'webdev3211@gmail.com',
                to: 'itsmrpk@gmail.com',
                subject: 'You receive a request for social work',
                text: `Hey someone has joined your hand
                ${data}    
            `
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(200).json({
                        success: true,
                        data: data,
                        message: 'Volunteered form submitted succesfully'
                    });
                }
            });
            //    res.status(200).json({
            //        success:true,
            //        data:data
            //    });
        })
        .catch(err => {
            res.status(501).json({
                success: false,
                error: "Unable to Submit",
                message: 'Volunteered form could not get submitted try again later'
            });
        })

});

// router.get('/:CatId',(req,res,next)=>{

// })
module.exports = router;
