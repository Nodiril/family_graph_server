module.exports = {
    Query: {
        partner_edges: async (parent, { }, { ctx, models }) => {
            var all_edges = await models.PartnerEdge.query()
            return all_edges;
        }
    }
};