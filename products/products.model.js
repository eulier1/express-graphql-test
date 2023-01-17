const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.42
      },
      {
        id: 'bluejeans',
        description: 'blue jeans',
        price: 55.55
      }
]

function getAllProducts() {
  return products
}

function getProductsByPrice(min, max) {
  return products.filter( (product) => {
    return product.price >= min && product.price <= max
  })
}

function getProductById(id) {
  return products.find( (product) => product.id === id )
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById
}