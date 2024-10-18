const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subcategories = new Schema({	
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    }
});

module.exports = mongoose.model('Subcategories', Subcategories);