exports.getProductsPage = (req, res) => {
  const products = [
    { name: "Skin Care" },
    { name: "Hair Style" },
    { name: "Nails" },
    { name: "Vitamins" },
  ]

  res.render("products", { products })
}
