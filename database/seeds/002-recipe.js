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
          amount: 10,
          ingredient: "peanuts",
          measurement: "lbs",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner",
          user_id: 1
        },
        {
          id: 2,
          title: "Ham and Cheese",
          source: "Grandpa",
          amount: 10,
          ingredient: "peanuts",
          measurement: "lbs",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner",
          user_id: 1
        },
        {
          id: 3,
          title: "Pasta",
          source: "Grandpa",
          amount: 10,
          ingredient: "peanuts",
          measurement: "lbs",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner",
          user_id: 1
        },
        {
          id: 4,
          title: "Pizza",
          source: "Grandpa",
          amount: 10,
          ingredient: "peanuts",
          measurement: "lbs",
          description: "yummy",
          instructions: "Whip it up",
          category: "Dinner",
          user_id: 2
        }
      ]);
    });
};
