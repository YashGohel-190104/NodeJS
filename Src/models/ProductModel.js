const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    subCategory:{
        type: Schema.Types.ObjectId,
        ref: 'Subcategories'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);