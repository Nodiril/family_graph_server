var { gql } = require('apollo-server-koa');

module.exports = gql`
  extend type Query {
    users: [User]
  }
  extend type Mutation {
    signUp(
      username: String!
      password: String!
    ): Token!

    signIn(
      login: String!
      password: String!): Token!
  }
  
  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    password: String!
  }
`;
