module.exports = {
    Query: {
        graph: async (parent, { }, { ctx, models }) => {
            var graphs = await models.Graph.query();
            return graphs;
        }
    }
};