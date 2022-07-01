const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productName: {
        type: String,
        trim: true,
        required: true
    },
    productImage: {
        type: String,
        trim: true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productDescription:{
        type:String,
        trim:true,
    },
},
    { timeStamps: true })
const Product = mongoose.model("Product", productSchema)
module.exports = Product