let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, default: "Seller did not provide a description" },
  imgUrl: { type: String, default: "//unsplash.it/150/150" },
  levels: { type: Number, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true }

})

module.exports = mongoose.model('House', schema)

