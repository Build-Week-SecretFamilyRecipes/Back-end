exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "York", password: "york" },
        { id: 2, username: "Andy", password: "andy" },
        { id: 3, username: "Catherine", password: "catherine" },
        { id: 4, username: "Granny", password: "granny" }
      ]);
    });
};
