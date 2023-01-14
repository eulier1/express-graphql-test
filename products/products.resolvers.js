const productModel = require('./products.model')

module.exports = {
    Query: {
        products: async (parent) => {
            console.log('Getting the products...')
            const products = await Promise.resolve(productModel.getAllProducts())
            return products
          },
    }
}