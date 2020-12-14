'use strict'

const { Model } = require('objection')
const bcrypt = require('bcrypt');
const ModelBase = require("./Base");

class User extends ModelBase {
  // Table name is the only required property.
  static get tableName() {
    return 'users'
  }

  static relationMappings = {
    graphs: {
      relation: ModelBase.HasManyRelation,
      modelClass: 'Graph',
      join: {
        from: 'users.id',
        to: 'graphs.userId'
      }
    }
  };

  async $beforeInsert() {
    await super.$beforeInsert();
    this.password = await User.generatePasswordHash(this.password);
  }

  static async generatePasswordHash(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  static async findByLogin(login) {
    let user = await User.query().where('username', login).first()
    return user;
  };
}

module.exports = User;