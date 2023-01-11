const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql']
})

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: async (parent) => {
        console.log('Getting the products...')
        const products = await Promise.resolve(parent.products)
        return products
      },
      orders: (parent) => {
        console.log('Getting the products...')
        return parent.orders
      }
    }
  }
})

const rootValue = {
  products: require('./products/products.model'),
  orders: require('./orders/orders.models')
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(3000, ()=> [ console.log('Running GraphQL server, PORT 3000') ])