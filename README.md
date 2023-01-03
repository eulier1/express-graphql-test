# GraphQL Server in an Express Web Server

### Eulier's Notes

Deep nested objects are very common in E-commerce applications or apps that scale with some technical debt.
So making GraphQL a perfect candidate.

It's actually amazing how easy is to query complex data structures for exactly the data that we want.

Our API is organized in **TYPES** and **FIELDS** rather than **ENDPOINTS**, which makes querying multiple endpoints for combining data, unnecesary, like in a RESTful API.

### Scalabiity

So as our project get’s larger, so instead of keep everything in one file. 
How do we :
- Break down our schema into multiple files?.
- Structure our project based on functionality?
- Organize our server when we need to add more complex logic to fetch our data?

[GraphQL Tools](https://www.graphql-tools.com/) greatly help us here. An open source set of utilties that simplify how we make graphql server.

It used under the hood by [Apollo GraphQL framework](https://www.apollographql.com/), but it availabe as a standalone package.


Since Apollo is a service company of graphql, is not good idea to fully commit to their services.