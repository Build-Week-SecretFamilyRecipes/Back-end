exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          title: "PB & J",
          source: "Grandpa",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner"
        },
        {
          id: 2,
          title: "Ham and Cheese",
          source: "Grandpa",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner"
        },
        {
          id: 3,
          title: "Pasta",
          source: "Grandpa",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner"
        },
        {
          id: 4,
          title: "Pizza",
          source: "Grandpa",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner"
        }
      ]);
    });
};
