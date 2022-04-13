//import productModel
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require('../utils/apifeatures');

//create Product
//next -Executes the middleware succeeding the current middleware
//admin Route
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({ success: true, product });

})



//get all products
exports.getAllProducts = async (req, res) => {
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage)
    const product = await apiFeature.query;
    res.status(200).json({ success: true, product, productCount });
}


//update Product

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({ success: false, message: "Product Not Found" });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, runValidator: true, useFindAndModify: false
    })
    //after update product
    res.status(200).json({ success: true, product });
})


//delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({ success: false, message: "Product Not Found" })
    }

    //delete itself
    await product.remove();
    res.status(200).json({ success: true, message: "Product Deleted Successfully" })
});


//get Single Product

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(
            new ErrorHandler("Product Not Found", 404)
        )
    }
    //if found
    res.status(200).json({ success: true, message: product });
})

//create new review or update the review

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    if (isReviewed) {

    } else {

    }

});