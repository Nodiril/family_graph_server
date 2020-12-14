var { gql } = require('apollo-server-koa');

module.exports = gql`
  extend type Query {
    graph: [Graph]
  }

  type Graph {
    id: ID!
    user_id: Int
    created_at: Date
    updated_at: Date
  }
`;
