const senha = require('./senha');

const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: senha,
        database: 'market_cubos',
    }

});

module.exports = knex;
