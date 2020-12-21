exports.up = knex => {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()
      table.integer('node_id')
      table.string('username')
      table.string('password')
      table.date('created_at')
      table.date('updated_at')
    })
    .createTable('graphs', table => {
      table.increments('id').primary()
      table.integer('user_id')
      table.date('created_at')
      table.date('updated_at')
    })
    .createTable('nodes', table => {
      table.increments('id').primary()
      table.integer('graph_id')
      table.string('first_name')
      table.string('maiden_name')
      table.string('last_name')
      table.enu('gender', ['m', 'f'])
      table.date('dob')
      table.string('occupation')
      table.json('contact')
      table.date('created_at')
      table.date('updated_at')
    })
    .createTable('edges', table => {
      table.increments('id').primary()
      table.integer('graph_id')
      table.integer('node_a')
      table.integer('node_b')
      table.enu('relationship', ['lp', 'pc'])
      table.date('start')
      table.date('end')
      table.date('created_at')
      table.date('updated_at')
    })
    .raw(`create view partner_edges as
    SELECT * from edges where relationship = 'lp';
    `)
    .raw(`create view parent_edges as
    SELECT * from edges where relationship = 'pc';
    `)
    .raw(`create view parent_nodes as
      select id, node_a as node_id from partner_edges 
      union all
      select id, node_b as node_id from partner_edges;
    `)
}

exports.down = knex => {
  return knex.schema
    .raw('drop view parent_nodes')
    .raw('drop view parent_edges')
    .raw('drop view partner_edges')
    .dropTableIfExists('edges')
    .dropTableIfExists('nodes')
    .dropTableIfExists('graphs')
    .dropTableIfExists('users')
}
