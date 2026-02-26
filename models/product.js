const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    price: { type: Number },
    stock : {type: Number},
    category: {
  type: String,
  enum: ["Skincare", "Haircare", "Nails"],
  required: true
},
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Product", ProductSchema)
