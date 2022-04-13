const mongoose = require("mongoose");

//name,description,rating,images[publicId,url],category,stock,numOfReviews,reviews[{name,rating,comment}],createdAt
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Description"],
        maxLength: [8, "Price Cannot exceed 8 figures"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product category"],

    },
    stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock cannot exceed 9999"],
        default: 1
    },
    numOfRevies: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

//export this model

module.exports = mongoose.model('Product', productSchema);