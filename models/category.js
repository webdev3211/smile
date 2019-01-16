var mongoose = require('mongoose');
var tagSchema = mongoose.Schema({
    category: {
        // _id: mongoose.Schema.Types.ObjectId, //_id ko comment krdo koi dikkat nai h 
        type: String,
        required: true,
        // ref: 'Post'
    },
});

module.exports = mongoose.model('Category', tagSchema);