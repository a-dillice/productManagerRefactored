// import mongoose
const mongoose = require("mongoose");

// create schema
const ProductsSchema = new mongoose.Schema({
    
    //product title 
    title:{
        type:String,
        required:[true, "The product title is required."],
        minlength:[5, "The product title requires at least 5 characters."],
        trim:true
    },
    // product price
    price:{
        type:String,
        required:[true, "The product price is required."],
        minlength:[5, "The product price requires at least 5 characters. Format:$0.00"],
        trim:true
    },
    // product description
    description:{
        type:String,
        required:[true, "The product description is required."],
        minlength:[10, "The product description requires at least 10 characters."],
        trim:true
    }

// auto timestamp
},{timestamps:true})

// export
const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;