const { sign, verify } = require("jsonwebtoken");
const User = require("../api/users/model");
const { Model } = require("../api/users/model");

const isAuthenticated = async (req, res, next) => {
  // Validate authorization in header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).end();
  }
  // Split for get the token
  const token = authHeader.split(" ")[1];
  // Validate token
  const payload = verify(token, "user");
  //If token is falsy
  if (!payload) {
    return res.status(401).end();
  }
  //Find user of email field in payload of token
  const user = await Model.findOne({ email: payload.email });
  if (!user) {
    return res.status(401).end();
  }
  // Add user to request
  req.user = user;
  // Continue to next middleware
  next();
};

module.exports = { isAuthenticated };
