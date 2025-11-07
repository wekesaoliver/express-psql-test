#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    console.log("seeding...");

    // Get connection string from command line argument or use env vars
    const connectionString = process.argv[2];

    const client = connectionString
        ? new Client({ connectionString })
        : new Client({
              host: process.env.DB_HOST,
              user: process.env.DB_USER,
              database: process.env.DB_NAME,
              password: process.env.DB_PASSWORD,
              port: process.env.DB_PORT,
          });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();

// # populating local db
// node db/populatedb.js <local-db-url>

// # populating production db
// # run it from your machine once after deployment of your app & db
// node db/populatedb.js <production-db-url>
