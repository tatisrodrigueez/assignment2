import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ 
  name: String,
description: String,
price: Number,
quantity: Number,
category: String, });

const Product = mongoose.model('Product', productSchema); 

export default Product;
