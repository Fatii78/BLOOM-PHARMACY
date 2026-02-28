const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number },
    image: { type: String },
    price: { type: Number },
    totalPrice: { type: Number },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Order", orderSchema)
