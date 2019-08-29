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
      recipe.text("ingredient").notNullable();
      recipe.text("instructions").notNullable();
      recipe.text("category").notNullable();
      recipe
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
