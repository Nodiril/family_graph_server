const jwt = require('jsonwebtoken');
const { combineResolvers } = require('graphql-resolvers');
const { AuthenticationError, UserInputError } = require('apollo-server-koa');

const User = require('../models/User')

const createToken = async (user, expiresIn) => {
  const { id, username } = user;
  return await jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn,
  });
};

module.exports = {
  Query: {
    users: async (parent, { }, { ctx, models }) => {
      return await models.User.query()
    }
  },
  Mutation: {
    signUp: async (
      parent,
      { username, password },
      { models },
    ) => {
      const user = await models.User.query().insert({
        username,
        password,
      });
      return { token: createToken(user, '30m') };
    },

    signIn: async (
      parent,
      { login, password },
      { models },
    ) => {
      const user = await models.User.findByLogin(login);

      if (!user) {
        throw new UserInputError(
          'No user found with this login credentials.',
        );
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError('Invalid password.');
      }

      return { token: createToken(user, '30m') };
    },
  },
};