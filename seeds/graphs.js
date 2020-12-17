
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('graphs').del()
    .then(function () {
      // Inserts seed entries
      return knex('graphs').insert([
        {
          id: 1,
          user_id: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]);
    });
};
