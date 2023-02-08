const express = require('express')
const path = require('path')

const { ApolloServer } = require('apollo-server-express')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql']
})

const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))

async function startApolloServer() {
  const app = express()

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  })

  const server = new ApolloServer({
    schema
  })

  // This will tell apollo to prepare to handle incomming graphql operations 
  await server.start()
  // This connect apollo server middleware to express server
  // This function is basically calling app.use on the middleware 
  // that is created inside of our apollo server and mount it that on /graphql path

  server.applyMiddleware({ app, path: '/graphql'})

  app.listen(3000, ()=> [ console.log('Running GraphQL server, PORT 3000') ])

}

startApolloServer()

