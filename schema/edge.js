var { gql } = require('apollo-server-koa');

module.exports = gql`
  extend type Query {
    edges: [Edge]
  }

  type Edge {
    id: ID!
    node_a: Int
    node_b: Int
    relationship: Relationship!
    partners: [Edge]
    start: Date
    end: Date
    created_at: Date
    updated_at: Date
  }

  enum Relationship {
    lp
    pc
  }
`;
