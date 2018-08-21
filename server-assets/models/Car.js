let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: "No description provided by seller" },
  imgUrl: { type: String, default: "//placehold.it/125x125" }
})

module.exports = mongoose.model('Car', schema)