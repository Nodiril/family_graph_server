'use strict'
const ModelBase = require("./Base");

class PartnerEdge extends ModelBase {
    // Table name is the only required property.
    static get tableName() {
        return 'partner_edges'
    }

    static relationMappings = {
        children_edges: {
            relation: ModelBase.HasManyRelation,
            modelClass: 'ParentEdge',
            join: {
                from: 'partner_edges.id',
                to: 'parent_edges.node_a'
            }
        },
        parent_node_a: {
            relation: ModelBase.HasOneRelation,
            modelClass: 'Node',
            join: {
                from: 'partner_edges.node_a',
                to: 'nodes.id'
            }
        },
        parent_node_b: {
            relation: ModelBase.HasOneRelation,
            modelClass: 'Node',
            join: {
                from: 'partner_edges.node_b',
                to: 'nodes.id'
            }
        }
    };

    // static relationMappings = {
    //     partners: {
    //         relation: ModelBase.ManyToManyRelation,
    //         modelClass: 'Edge',
    //         join: {
    //             from: 'edges.id',
    //             through: {
    //                 from: 'partner_edges.edge_id',
    //                 to: 'partner_edges.partners'
    //             },
    //             to: 'edges.id'
    //         }
    //     }
    // };
}

module.exports = PartnerEdge;