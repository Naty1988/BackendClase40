let mongoose = require('mongoose');
let model = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose;


const productSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    _id: { type: String, required: false },
  });
  
  const Product = mongoose.model("product", productSchema);
  
  // export const Product = productModel;

module.exports = Product 
