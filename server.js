const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`)

const rootValue = {
    description: 'Motorcycle',
    price: 1300.00
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue
}))

app.listen(3000, ()=> [ console.log('Running GraphQL server, PORT 3000') ])