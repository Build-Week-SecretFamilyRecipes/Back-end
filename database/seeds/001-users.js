const bcrypt = require("bcryptjs");
const yorkPassword = bcrypt.hashSync("york", 5);
const andyPassword = bcrypt.hashSync("andy", 5);
const catherinePassword = bcrypt.hashSync("catherine", 5);
const grannyPassword = bcrypt.hashSync("granny", 5);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "York", password: yorkPassword },
        { id: 2, username: "Andy", password: andyPassword },
        { id: 3, username: "Catherine", password: catherinePassword },
        { id: 4, username: "Granny", password: grannyPassword }
      ]);
    });
};
