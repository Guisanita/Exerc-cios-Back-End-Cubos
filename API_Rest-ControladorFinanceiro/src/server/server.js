const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.PASSWORD,
    database: 'dindin',
});

module.exports = pool;