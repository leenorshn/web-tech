const express= require("express");
const contacts=require("./contact")
const app=express()
const cors =require("cors")
const mongoose= require("mongoose");
const Product=require("./product")


app.use(cors())

app.get("/products",async(req,res)=>{
    const products=await Product.find({});
    return res.status(200).json(products);
})

app.post("/products",async(req,res)=>{
    const prod= await Product.create(req.body)
    return res.status(200).json(prod);
})

app.post("/products/:id",async(req,res)=>{
    const prod= await Product.findByIdAndDelete(req.params.id)
    return res.status(200).json(prod);
})

app.listen(7000,  async function(){
 mongoose.connect("mongodb://localhost:27017/formation",{
    
}).then(()=>console.log("connected on DB"))
    console.log("server is listening on port 7000");
})