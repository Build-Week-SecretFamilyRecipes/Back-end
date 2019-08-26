const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../recipes/recipe-model.js");
const secrets = require("../config/secrets.js");
const restricted = require("../auth/authenticate-middleware.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;

  Users.addUser(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log("user", user);
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

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: "You have been denied the user list!" });
    });
});

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

module.exports = router;
