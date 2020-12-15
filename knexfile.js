require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: "./familja.sqlite"
    },
    useNullAsDefault: true
  },
  live: {
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
