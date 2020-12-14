const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const Knex = require('knex')
const knexConfig = require('./knexfile')
const { Model } = require('objection')

const { ApolloServer } = require('apollo-server-koa');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

require('dotenv').config();

const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = new Koa()

const apolloserver = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  formatError: error => {
    const message = error.message;
    return {
      ...error,
      message,
    };
  },
  context: async ({ ctx }) => {
    return {
      ctx,
      models
    };
  },
});

apolloserver.applyMiddleware({ app });

const server = app.listen(8641, () => {
  console.log('Listening at port %s', server.address().port)
})