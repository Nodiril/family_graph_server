'use strict'

const ModelBase = require("./Base");

class Node extends ModelBase {
    // Table name is the only required property.
    static get tableName() {
        return 'nodes'
    }

    static relationMappings = {
        parent_edge: {
            relation: ModelBase.HasOneRelation,
            modelClass: 'ParentEdge',
            join: {
                from: 'nodes.id',
                to: 'parent_edges.node_b'
            }
        },
        partner_edges: {
            relation: ModelBase.ManyToManyRelation,
            modelClass: 'PartnerEdge',
            join: {
              from: 'nodes.id',
              through: {
                from: 'parent_nodes.node_id',
                to: 'parent_nodes.id'
              },
              to: 'partner_edges.id'
            }
          }
    };
}

module.exports = Node;