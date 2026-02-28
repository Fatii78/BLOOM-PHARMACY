const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
})

module.exports = mongoose.model("Category", categorySchema)
