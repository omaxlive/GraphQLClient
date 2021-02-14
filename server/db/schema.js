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
  input UserInput {
    name: String
    lastName: String
    email: String
    password: String
  }
  type User {
    id: ID
    name: String
    lastName: String
    email: String
    created: String
  }
  type Mutation {
    newUser(input: UserInput!): User
  }
`;

module.exports = typeDefs;
