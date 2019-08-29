const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("../config/secrets.js");
const restricted = require("../auth/authenticate-middleware.js");

function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    jwtid: 1
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;

  Users.addUser(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Your attempt to add a user has...FAILED!" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findUser({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user);
        console.log("token", token);
        res.status(200).json({
          message: `Welcome ${user.username}, you have the keys to the kingdom!`,
          token
        });
      } else {
        res
          .status(401)
          .json({ message: "You do not have the keys to the kingdom!!" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "You done got smurfed!" });
    });
});

router.get("/users", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: "You have been denied the user list!" });
    });
});

router.get("/recipes", (req, res) => {
  // console.log("user", req.user);
  // let user = req.user;
  Users.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log("in get recipes", error);
      res
        .status(500)
        .json({ message: "You have been denied the recipe list!" });
    });
});

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;
  Users.getUserRecipes(id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: "You gonna be hungry tonight!" });
    });
});

router.post("/new-recipe", (req, res) => {
  let recipe = req.body;
  console.log("user", req.user.id);
  Users.addRecipe(recipe)
    .then(recipes => {
      res.status(201).json(recipes);
    })
    .catch(error => {
      console.log("error", error);
      res
        .status(500)
        .json({ message: "Your attempt to add a recipe has...FAILED!" });
    });
});

// router.post("/new-recipe/", async (req, res) => {
//   const recipe = req.body;
//   const id = req.params.id;

//   try {
//     const add = await Users.addRecipe(recipe);

//     if (add) {
//       res.status(201).json(add);
//     } else {
//       res.status(404).json({ message: `Missing data needed!` });
//     }
//   } catch (error) {
//     console.log("error", error);
//     res
//       .status(500)
//       .json({ message: "Attempt to find the recipe has..FAILED!" });
//   }
// });

router.put("/recipes/:id", async (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  try {
    const update = await Users.updateRecipe(id, changes);

    if (update) {
      res.json({ updateRecipe: update });
    } else {
      res
        .status(404)
        .json({ message: `Ain't not recipe with that id up in here!` });
    }
  } catch (error) {
    res.status(500).json({ message: "Attempt to update recipe has..FAILED!" });
  }
});

router.delete("/recipes/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Users.deleteRecipe(id);

    if (deleted) {
      res.status(201).json({ removed: deleted });
    } else {
      res
        .status(404)
        .json({ message: "Can not find that recipe you say you want!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "No, no, no that deletion did not happen!" });
  }
});

router.get("/find-recipes/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const find = await Users.findRecipe(id);

    if (find) {
      res.status(201).json(find);
    } else {
      res
        .status(404)
        .json({ message: `Ain't no recipe with that id up in here!` });
    }
  } catch (error) {
    console.log("id", id);
    console.log("error", error);
    res
      .status(500)
      .json({ message: "Attempt to find the recipe has..FAILED!" });
  }
});

module.exports = router;
