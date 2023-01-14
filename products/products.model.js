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

module.exports = {
  getAllProducts
}