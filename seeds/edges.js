
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('edges').del()
    .then(function () {
      // Inserts seed entries
      return knex('edges').insert([
        {
          id: 1,
          graph_id: 1,
          node_a: 1,
          node_b: 2,
          relationship: 'lp',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          graph_id: 1,
          node_a: 1,
          node_b: 3,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          graph_id: 1,
          node_a: 4,
          node_b: 5,
          relationship: 'lp',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          graph_id: 1,
          node_a: 3,
          node_b: 6,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          graph_id: 1,
          node_a: 6,
          node_b: 3,
          relationship: 'lp',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          graph_id: 1,
          node_a: 5,
          node_b: 7,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          graph_id: 1,
          node_a: 5,
          node_b: 8,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          graph_id: 1,
          node_a: 5,
          node_b: 9,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          graph_id: 1,
          node_a: 5,
          node_b: 10,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          graph_id: 1,
          node_a: 11,
          node_b: 7,
          relationship: 'lp',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          graph_id: 1,
          node_a: 10,
          node_b: 12,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          graph_id: 1,
          node_a: 10,
          node_b: 13,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          graph_id: 1,
          node_a: 10,
          node_b: 14,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          graph_id: 1,
          node_a: 11,
          node_b: 14,
          relationship: 'pc',
          start: null,
          end: null,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
