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
    getUser(token: String!): User
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
  type Token {
    token: String
  }
  input AuthUserInput {
    email: String!
    password: String!
  }
  type Mutation {
    newUser(input: UserInput!): User
    authUser(input: AuthUserInput!): Token
  }
`;

module.exports = typeDefs;
