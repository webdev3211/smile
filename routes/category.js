var mongoose = require('mongoose');
var Category = require('../models/category');
var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    Category.find({}).then(
        (data) => {
            if (!data)
                return res.status(501).json({
                    success: false,
                    message: "No data found!"
                });
            res.status(200).json({
                success: true,
                data: data
            });

        }
    ).catch((err) => {
        res.status(501).json({
            success: false,
            message: "Unable to Find Tags"
        });
    });
});

router.post('/', (req, res, next) => {


    var category = new Category({
        category: req.body.category,
    });
    category.save()
        .then(
            (data) => {
                if (!data)
                    return res.status(501).json({
                        success: false,
                        message: "Unable to save"
                    });
                res.status(200).json({
                    success: true,
                    data: data
                });

            }
        ).catch((err) => {
            res.status(501).json({
                success: false,
                message: "Unable To save category"
            });
        });
});
//Exporting the router
module.exports = router;