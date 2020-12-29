var { gql } = require('apollo-server-koa');

module.exports = gql`
  extend type Query {
    nodes: [Node]
  }

  type Node {
    id: ID!
    graph_id: Int
    first_name: String
    maiden_name: String
    last_name: String
    gender: Gender!
    dob: Date
    occupation: String
    contact: String
    parent_edge: ParentEdge
    partner_edges: [PartnerEdge]
    created_at: Date
    updated_at: Date
  }

  enum Gender {
    m
    f
  }
`;
