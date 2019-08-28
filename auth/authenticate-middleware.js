const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        console.log("error in token", error);
        res.status(401).json({ message: "You shall not pass!" });
      } else {
        req.user = { user_id: decodedToken.subject };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "You know I want dat token!" });
  }
};
