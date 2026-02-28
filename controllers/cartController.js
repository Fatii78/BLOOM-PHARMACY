const Product = require("../models/product")

const initCart = (req) => {
  if (!req.session.cart) req.session.cart = []
}

const getCart = (req, res) => {
  initCart(req)
  const cart = req.session.cart
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 1.0 : 2.0
  const total = subtotal + delivery
  res.render("cart/index", { cart, subtotal, delivery, total })
}

const addToCart = async (req, res) => {
  try {
    initCart(req)
    const product = await Product.findById(req.params.productId)
    const existing = req.session.cart.find(
      (item) => item.productId === String(product._id)
    )
    if (existing) {
      existing.quantity += 1
    }
    res.redirect("/cart")
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getCart,
  addToCart
}
