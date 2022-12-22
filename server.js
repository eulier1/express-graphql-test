const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`)

const rootValue = {
  products: [
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
  ],
  orders: [
    {
      date:'2005-05-05',
      subtotal: 90.22,
      items: [
        {
          product: { 
            id: 'redshoe',
            description: 'Old red shoe',
            price: 45.11
          },
          quantity: 2
        }
      ]
    }
  ]
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(3000, ()=> [ console.log('Running GraphQL server, PORT 3000') ])