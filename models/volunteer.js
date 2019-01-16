var mongoose = require('mongoose');
var volunteerSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String, //Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },

});
module.exports = mongoose.model('Volunteer', volunteerSchema);