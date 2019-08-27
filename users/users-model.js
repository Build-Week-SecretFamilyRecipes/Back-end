const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  findUser,
  getUsers,
  getUserRecipes,
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe
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
      "r.description",
      "r.ingredient",
      "r.amount",
      "r.measurement",
      "r.instructions",
      "r.category",
      "u.username"
    )
    .where({ user_id: id });
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}

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
