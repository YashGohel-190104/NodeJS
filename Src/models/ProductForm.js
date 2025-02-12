const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productformSchema = new Schema({
    name:{
        type:"String",
        required:true,
    },
    productimage:{
        type:"String",
        required:true,
    }
})

module.exports = mongoose.model('Productform',productformSchema);