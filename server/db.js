const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: "",
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const proConfig = process.env.DATABASE_URL;

const pool = new Pool(
  // @ts-ignore
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
