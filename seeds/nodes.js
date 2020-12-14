
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nodes').del()
    .then(function () {
      // Inserts seed entries
      return knex('nodes').insert([
        {
          first_name: '	Robert',
          last_name: 'Todd',
          id: 1,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Elizabeth',
          last_name: 'Todd',
          id: 2,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Mary',
          last_name: 'Lincoln',
          maiden_name: 'Todd',
          id: 3,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Thomas',
          last_name: 'Lincoln',
          id: 4,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Nancy',
          last_name: 'Lincoln',
          maiden_name: 'Hanks',
          id: 5,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Abraham',
          last_name: 'Lincoln',
          id: 6,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Robert',
          last_name: 'Lincoln',
          id: 7,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Edward',
          last_name: 'Lincoln',
          id: 8,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'William',
          last_name: 'Lincoln',
          id: 9,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Thomas',
          last_name: 'Lincoln',
          id: 10,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Mary',
          last_name: 'Lincoln',
          maiden_name: 'Harlan',
          id: 11,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Mary',
          last_name: 'Isham',
          maiden_name: 'Lincoln',
          id: 12,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Jessie',
          last_name: 'Lincoln',
          maiden_name: 'Harlan',
          id: 13,
          graph_id: 1,
          gender: 'f',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          first_name: 'Abraham',
          last_name: 'Lincoln',
          id: 14,
          graph_id: 1,
          gender: 'm',
          dob: null,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
