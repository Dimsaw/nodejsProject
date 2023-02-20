const jwt = require("jsonwebtoken");

const { NotAuthorizedError } = require("../helpers/errors");

const authMiddleware = (req, res, next) => {
  try {
    const [tokenType, token] = req.headers["authorization"].split(" ");
    console.log(tokenType, token);

    if (!token) {
      next(new NotAuthorizedError("Please, provide a token"));
    }

    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthorizedError("Invalid token"));
  }
};

module.exports = {
  authMiddleware,
};
