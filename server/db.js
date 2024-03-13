const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_travel_gh_db"; 
  const uuid = require ('uuid')
);

const createTables = async() => {
  const SQL = `
    DROP TABLE IF EXISTS vacations;
    DROP TABLE IF EXISTS users; 
    DROP TABLE IF EXISTS places; 
    CREATE TABLE users (
      id UUID PRIMARY KEY, 
      name VARCHAR(100) NOT NULL UNIQUE 
    );
    CREATE TABLE places (
      id UUID PRIMARY KEY, 
      name VARCHAR(100) NOT NULL UNIQUE 
    );
    CREATE TABLE vacations(
      id UUID PRIMARY KEY, 
      travel_date DATE DEFAULT now(), 
      place_id UUID REFERENCES places(id) NOT NULL,
      user_id UUID REFERENCES places(id) NOT NULL
    
    );
  `;
  await client.query(SQL);
};

const createUser = ({ name }) => {
  const SQL - `
  INSERT INTO users(name) 
  VALUES($1, $2)
  RETURNING = 
  `;
  const response = await client.query(SQL, [uuid.v4(), name]); 
  return response.rows [0];
};

module.exports = {
  client,
  createTables,
  createUser
};
