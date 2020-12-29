const gql = require('graphql-tag');
const getObjectNotation = require("gql-tag-objection-notation");

module.exports = {
    Query: {
        nodes: async (parent, { }, { ctx, models }) => {
            const obj = gql`${ctx.request.body.query}`;
            var nodes = await models.Node.query().where('id', 1)
                .withGraphFetched(traverse(obj.definitions[0].selectionSet.selections[0]))

            return nodes;
        }
    }
};