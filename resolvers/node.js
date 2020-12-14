module.exports = {
    Query: {
        nodes: async (parent, { }, { ctx, models }) => {
            var nodes = await models.Node.query()
            return nodes;
        }
    }
};