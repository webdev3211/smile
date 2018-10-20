var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Donate=require('../models/donate');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var verifyToken = require('../middleware/auth');
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

//=============================================
//Post donation
//=============================================
router.post('/:catId',(req,res,next)=>{
    var donate=new Donate({
         category:req.params.catId,
         name:req.body.name,
         address:req.body.address,
         contact:req.body.contact,
        // donater:req.decoded.userId,
         description:req.body.description
    });
    donate.save().then(data=>{
        res.status(200).json({
            success:true,
            data:data
        });
    })
    .catch(err=>{
        res.status(501).json({
            success:false,
            error:"Unable to Donate"
        });
    })
    // res.status(200).json({
    //     success:true,
    //     data:"data succ",
    //     cat:req.params.catId
    // });
});
//========================================
//GET DONATIONS
//========================================
router.get('/:catId',(req,res,next)=>{
     Donate.find({category:req.params.catId})
     .then(data=>{
        res.status(200).json({
            success:true,
            data:data
        });
     })
     .catch(err=>{
        res.status(200).json({
            success:false,
            error:"Unable to find donations related to this Catergory"
        });
    });
})
module.exports=router;