const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "5253",
  host: "localhost",
  port: "5432",
  database: "jwtauth",
});

module.exports = pool;
