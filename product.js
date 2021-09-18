const mongoose =require("mongoose")

const prodSchema=new mongoose.Schema({
    name:String,
    price:Number,
    url:String
})

const Product=mongoose.model("Product",prodSchema)

module.exports= Product;