const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
//const recipeRouter = require("../recipe/recipe-router.js");

const server = express();

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = Date.now();
  console.log(`You made a ${method} request to ${url} at ${timestamp}!`);
  next();
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use("/api/auth", authRouter);
//server.use("/api/recipe", authenticate, recipeRouter);

server.get("/", (req, res) => {
  res.send(`IT'S WORKING, IT'S WORKING!`);
});

module.exports = server;
