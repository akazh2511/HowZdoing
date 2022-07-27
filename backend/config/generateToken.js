const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "akazh", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;