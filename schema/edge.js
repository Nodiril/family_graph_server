var { gql } = require('apollo-server-koa');

module.exports = gql`
  extend type Query {
    partner_edges: [PartnerEdge]
  }

  type PartnerEdge {
    id: ID!
    node_a: Int
    node_b: Int
    relationship: Relationship!
    start: Date
    end: Date
    children_edges: [ParentEdge]
    parent_node_a: Node
    parent_node_b: Node
    created_at: Date
    updated_at: Date
  }

  type ParentEdge {
    id: ID!
    node_a: Int
    node_b: Int
    relationship: Relationship!
    start: Date
    end: Date
    partner_edge: ParentEdge
    child_node: Node
    created_at: Date
    updated_at: Date
  }

  enum Relationship {
    lp
    pc
  }
`;
