const productSchema = require('../models/ProductModel');
const CategorySchema = require('../models/CategoryModel');
const Subcategories  = require('../models/SubCategoryModel');

const addProduct = async (req, res) => {
    try{
        const savedProduct = await productSchema.save(req.body);
        res.status(200).json({
            message: "Product saved successfully",
            data: savedProduct,
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error while saving product",
            error: err.message,
        });
    }
};

const getAllProducts = async (req, res) => {
    const product = await productSchema.find().populate("subCategory").populate({
        path: "subCategory",
        populate: {
            path: "category",
            model: "category"
        }
    })
}

module.exports = {
    addProduct,
    getAllProducts,
}