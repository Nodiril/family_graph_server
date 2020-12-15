To run we need to prepare the database, for that we use knex. Because we are using migrations and seeds we need to install knex cli (npm install knex -g), for the purpose of running locally more simple we will use sqlite3 database.
1. git clone https://github.com/Nodiril/family_graph_server.git
2. cd family_graph_server/ && npm i
3. knex migrate:latest && knex seed:run
4. npm start
5. go to http://localhost:8641/graphql - here you can run queries based on what is defined in the schema and resolvers.


Data structure to store information about a family. The basic componenents for storing the information are the nodes (people) and the edges (relationships).
This application uses the koa framework, objection orm and apollo (graphql) for and API.

The database/model structure:

Node: defines an individual. Properties include the first/last/maiden name, gender, date of birth, occupation, and contact information. (this can be extended to include more fields.

Edge: defines a relationship between two individuals (partners) or between a relationship and an individual (parents).
An edge consists of two fkeys node_a and node_b and the relationship enum (life partners (lp), parent child (pc)).
When the relationship on an edge is 'lp', node_a points to a node id and node_b points to a node id.
When the relationship on an edge is 'pc', node_a points to an edge id (the parents) and node_b points to a node id (the child).
