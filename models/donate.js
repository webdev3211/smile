var mongoose = require('mongoose');
var donateSchema = mongoose.Schema({

     category:{
         type:String,
         required:true
     },
     name:{
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
     donater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
     createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Donate', donateSchema);