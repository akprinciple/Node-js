const { default: mongoose } = require("mongoose");

const product = {
    name : String,
    category: String,
    description: String,
    price: Number
}
module.exports = mongoose.model('product', product)
 
