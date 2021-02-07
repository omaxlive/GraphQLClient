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
  input PostInput {
    author: String
  }
  type Query {
    getPosts(input: PostInput!): [Post]
    getAuthors: [Author]
  }
`;

module.exports = typeDefs;
