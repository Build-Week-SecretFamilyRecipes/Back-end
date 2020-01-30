const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  findUser,
  getUsers,
  getUserRecipes,
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
  findRecipe
};

function addUser(user) {
  return db("users").insert(user);
}

function findUser(filter) {
  return db("users").where(filter);
}

function getUsers() {
  return db("users");
}

function getRecipes() {
  return db("recipes");
}

function getUserRecipes(id) {
  return db("recipes as r")
    .innerJoin("users as u", "r.user_id", "=", "u.id")
    .select(
      "r.id",
      "r.title",
      "r.source",
      "r.ingredient",
      "r.instructions",
      "r.category",
      "u.username"
    )
    .where({ user_id: id });
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}

// function addRecipe(recipe) {
//   // passing 'id' as the second parameter is recommended to ensure the id is returned
//   // when connecting to other database management systems like Postgres
//   return db("recipes")
//     .insert(recipe, "id")
//     .then(([id]) => {
//       return findById(id);
//     });
// }

function updateRecipe(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes);
}

function deleteRecipe(id) {
  return db("recipes")
    .where({ id })
    .del();
}

function findRecipe(id) {
  return db("recipes as r")
    .select(
      "r.id",
      "r.title",
      "r.source",
      "r.ingredient",
      "r.instructions",
      "r.category"
    )
    .where({ id })
    .first();
}

function findById(id) {
  return db("recipes")
    .where({ id })
    .first();
}
