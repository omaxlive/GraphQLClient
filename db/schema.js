const { gql } = require('apollo-server');

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

module.exports = typeDefs;
