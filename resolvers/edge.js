const Edge = require('../models/Edge')

module.exports = {
    Query: {
        edges: async (parent, { }, { ctx, models }) => {
            var all_edges = await models.Edge.query().withGraphFetched('partners')
            return all_edges;
        }
    }
};