var mongoose = require('mongoose');
var movementSchema = mongoose.Schema({
     title:{
         type:String,
         required:true,
     },
     address:{
         type:String,
         required:true
     },
     contact:{
         type:String,//Number,
         required:true
     },
     createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    timings:{
        type:Date
    }
});
module.exports = mongoose.model('Movement', movementSchema);