require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      database: process.env.DB,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
