const ordersModel = require('./orders.model')

module.exports = {
    Query: {
      orders: (parent) => {
        console.log('Getting the orders...')
        return ordersModel.getAllOrders()
      }
    }
}
