'use strict'
const ModelBase = require("./Base");

class Edge extends ModelBase {
    // Table name is the only required property.
    static get tableName() {
        return 'edges'
    }

    static relationMappings = {
        partners: {
            relation: ModelBase.ManyToManyRelation,
            modelClass: 'Edge',
            join: {
                from: 'edges.id',
                through: {
                    from: 'partner_edges.edge_id',
                    to: 'partner_edges.partners'
                },
                to: 'edges.id'
            }
        }
    };
}

module.exports = Edge;