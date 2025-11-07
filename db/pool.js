require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.DB_HOST, // or wherever the db is hosted
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // The default port
});

// This is used when connecting with a hosted database service
// module.exports = new Pool({
//     connectionString:
//         "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
// });
