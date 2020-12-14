var { GraphQLDateTime } = require('graphql-iso-date');
var user = require('./user')
var edge = require('./edge')
var graph = require('./graph')
var node = require('./node')
const customScalarResolver = {
  Date: GraphQLDateTime,
};

module.exports = [
  customScalarResolver,
  user,
  edge,
  graph,
  node
];
