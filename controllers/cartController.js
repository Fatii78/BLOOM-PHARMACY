const Product = require("../models/product")

const initCart = (req) => {
  if (!req.session.cart) req.session.cart = []
}

const getCart = (req, res) => {
  initCart(req)

  const cart = req.session.cart

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 1.0 : 0
  const total = subtotal + delivery

  res.render("cart/index", { cart, subtotal, delivery, total })
}



module.exports = {
  getCart
}
