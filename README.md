# Express PostgreSQL Test

A simple Express.js application demonstrating PostgreSQL database integration with user management functionality. This project includes features for viewing, creating, searching, and managing usernames stored in a PostgreSQL database.

## Features

- View all usernames
- Create new usernames
- Search usernames using SQL-based search (case-insensitive)
- Delete all usernames
- Environment variable configuration for database connection

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **View Engine**: EJS (Embedded JavaScript)
- **Environment Variables**: dotenv

## Prerequisites

- Node.js
- PostgreSQL database (local or hosted)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/wekesaoliver/express-psql-test.git
cd express-psql-test
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
DB_HOST=localhost
DB_USER=your_username
DB_NAME=your_database
DB_PASSWORD=your_password
DB_PORT=5432
```

**Important**: If your password contains special characters (like `#`, `@`, etc.), make sure to quote it:
```env
DB_PASSWORD="your_password_with_special_chars"
```

4. Set up the database:
   - Create a PostgreSQL database
   - Run the populate script to create the table and seed initial data:

```bash
# For local database
node db/populatedb.js

# For production/hosted database (using connection string)
node db/populatedb.js "postgresql://user:password@host:port/database"
```

## Usage

Start the server:
```bash
node app.js
```

The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

## Routes

- `GET /` - Display all usernames (supports search query parameter)
- `GET /new` - Display form to create a new username
- `POST /new` - Submit a new username
- `GET /delete` - Delete all usernames from the database

## Search Functionality

The index route supports SQL-based search via query parameters:

```
GET /?search=sup
```

This will return all usernames containing "sup" (case-insensitive). The search is performed using PostgreSQL's `ILIKE` operator, so it's case-insensitive and supports pattern matching.

## Project Structure

```
express-psql-test/
├── app.js                 # Main application entry point
├── db/
│   ├── pool.js           # PostgreSQL connection pool
│   ├── queries.js        # Database query functions
│   └── populatedb.js     # Database seeding script
├── controllers/
│   └── usersController.js # Route controllers
├── routes/
│   └── userRouter.js      # Application routes
├── views/
│   ├── home.ejs          # Home page
│   └── createUser.ejs    # Create user form
├── .env                  # Environment variables (not in git)
└── package.json          # Project dependencies
```

## Database Schema

The `usernames` table has the following structure:

```sql
CREATE TABLE usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255)
);
```

## Database Functions

The application uses the following database functions (in `db/queries.js`):

- `getAllUsernames()` - Retrieve all usernames
- `searchUsernames(searchTerm)` - Search usernames using SQL ILIKE
- `insertUsername(username)` - Insert a new username
- `deleteAllUsernames()` - Delete all usernames

## Environment Variables

The application uses the following environment variables (configured in `.env`):

- `DB_HOST` - Database host (default: localhost)
- `DB_USER` - Database user
- `DB_NAME` - Database name
- `DB_PASSWORD` - Database password
- `DB_PORT` - Database port (default: 5432)
- `PORT` - Server port (default: 3000)

## Deployment

For production deployment:

1. Set up a PostgreSQL database on a hosting service (Railway, Render, ElephantSQL, Supabase, Neon, etc.)
2. Update your `.env` file with production database credentials
3. Run the populate script with the production connection string:
```bash
node db/populatedb.js "postgresql://user:password@host:port/database"
```
4. Deploy your application to a hosting service
5. Make sure to set environment variables in your hosting platform

## Notes

- The search functionality uses PostgreSQL's `ILIKE` operator for case-insensitive pattern matching
- The delete route (`GET /delete`) deletes ALL usernames - use with caution
- Database connection uses a connection pool for efficient resource management

## License

ISC

## Author

wekesaoliver
