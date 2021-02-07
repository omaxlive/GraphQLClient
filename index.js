const { ApolloServer, gql } = require('apollo-server');

// Schema
const typeDefs = gql`
  type Item {
    title: String
    detail: String
  }
  type Query {
    getItems: [Item]
  }
`;

const items = [
  {
    title: 'item 1',
    detail: 'detail 1',
  },
  {
    title: 'item 2',
    detail: 'detail 2',
  },
  {
    title: 'item 3',
    detail: 'detail 3',
  },
];

// Resolvers
const resolvers = {
  Query: {
    getItems: () => items,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready in the URL ${url}`);
});
