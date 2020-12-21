'use strict'
const ModelBase = require("./Base");

class ParentEdge extends ModelBase {
    // defines an edge between a partner edge and a node (the child)
    static get tableName() {
        return 'parent_edges'
    }

    static relationMappings = {
        partner_edge: {
            relation: ModelBase.HasOneRelation,
            modelClass: 'PartnerEdge',
            join: {
                from: 'parent_edges.node_a',
                to: 'partner_edges.id'
            }
        },
        child_node: {
            relation: ModelBase.HasOneRelation,
            modelClass: 'Node',
            join: {
                from: 'parent_edges.node_b',
                to: 'nodes.id'
            }
        }
    };
}

module.exports = ParentEdge;