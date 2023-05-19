import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello(name: String!): String
  }
`

const resolvers = {
  Query: {
    hello: (parent, args) => `Hello ${args.name}`,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
