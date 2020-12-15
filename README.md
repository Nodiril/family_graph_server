To run we need to prepare the database, for that we use knex. Because we are using migrations and seeds we need to install knex cli (npm install knex -g)
1. create database in server of your choice (working with knex) and adjust the client key in knexfile.js based on your database
2. Add .env file to root with the keys:
      DB: your_database
      USER: your_database_user
      PASSWORD: your_database_users_password
3. knex migrate:latest - this will create the tables in the database basedon the migration file in migrations folder.
4. knex seed:run - this will populate the tables with data. (Abraham Lincolns family)
5. git clone https://github.com/Nodiril/family_graph_server.git
6. cd family_graph_server/
7. npm i
8. npm start
9: go to http://localhost:8641/graphql - here you can run queries based on what is defined in the schema and resolvers.


Data structure to store information about a family. The basic componenents for storing the information are the nodes (people) and the edges (relationships).
This application uses the koa framework, objection orm and apollo (graphql) for and API.

The database/model structure:

Node: defines an individual. Properties include the first/last/maiden name, gender, date of birth, occupation, and contact information. (this can be extended to include more fields.

Edge: defines a relationship between two individuals (partners) or between a relationship and an individual (parents).
An edge consists of two fkeys node_a and node_b and the relationship enum (life partners (lp), parent child (pc)).
When the relationship on an edge is 'lp', node_a points to a node id and node_b points to a node id.
When the relationship on an edge is 'pc', node_a points to an edge id (the parents) and node_b points to a node id (the child).
