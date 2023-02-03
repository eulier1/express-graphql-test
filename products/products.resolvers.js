const productModel = require('./products.model')

module.exports = {
    Query: {
        products: async (parent) => {
            console.log('Getting the products...')
            const products = await Promise.resolve(productModel.getAllProducts())
            return products
          },
        productsByPrice: (_, arg) => {
            const productsByPrice = productModel.getProductsByPrice(arg.min, arg.max)
            return productsByPrice
        },
        product: (_, arg) => {
            const product = productModel.getProductById(arg.id)
            return product
        }
    },
    Mutation: {
        addNewProduct: (_, arg) => {
            return productModel.addNewProduct(arg.id, arg.description, arg.price)
        },
        addNewProductReview: (_, arg) => {
            return productModel.addNewProductReview(arg.id, arg.rating, arg.comment)
        }
    }
}