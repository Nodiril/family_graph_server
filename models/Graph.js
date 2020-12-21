'use strict'

const ModelBase = require("./Base");

class Graph extends ModelBase {
    // Table name is the only required property.
    static get tableName() {
        return 'graphs'
    }

    static relationMappings = {
        edges: {
            relation: ModelBase.HasManyRelation,
            modelClass: 'PartnerEdge',
            join: {
                from: 'graphs.id',
                to: 'edges.graphId'
            }
        }
    };
}
module.exports = Graph;