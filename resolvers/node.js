module.exports = {
    Query: {
        nodes: async (parent, { }, { ctx, models }) => {
            var nodes = await models.Node.query().where('id', 1)
            //'[parent_edge, partner_edges.[children_edges, parent_node_a,]]'
            .withGraphFetched({
                parent_edge: true,
                partner_edges: {
                    parent_node_a: true,
                    parent_node_b: true,
                    children_edges: {
                        child_node: true
                    }
                }
            })

            return nodes;
        }
    }
};