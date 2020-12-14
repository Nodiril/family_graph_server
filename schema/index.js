var { gql } = require('apollo-server-koa');
var user = require('./user');
var edge = require('./edge');
var graph = require('./graph');
var node = require('./node');
const linkSchema = gql`
  scalar Date
  
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, user, edge, graph, node];
