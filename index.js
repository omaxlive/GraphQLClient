const { ApolloServer, gql } = require('apollo-server');

// Schema
const typeDefs = gql`
  type Post {
    title: String
    detail: String
  }
  type Author {
    author: String
  }
  type Query {
    getPosts: [Post]
    getAuthors: [Author]
  }
`;

const posts = [
  {
    title: 'item 1',
    detail: 'detail 1',
    author: 'author 1',
  },
  {
    title: 'item 2',
    detail: 'detail 2',
    author: 'author 2',
  },
  {
    title: 'item 3',
    detail: 'detail 3',
    author: 'author 3',
  },
];

// Resolvers
const resolvers = {
  Query: {
    getPosts: () => posts,
    getAuthors: () => posts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready in the URL ${url}`);
});
