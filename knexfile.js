'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/meow'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
