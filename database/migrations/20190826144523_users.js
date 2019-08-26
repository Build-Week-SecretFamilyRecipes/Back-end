exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
    })
    .createTable("recipes", recipe => {
      recipe.increments();
      recipe
        .string("title", 255)
        .notNullable()
        .unique();
      recipe.text("source").notNullable();
      recipe.text("description");
      recipe.text("instructions").notNullable();
      recipe.text("category").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
