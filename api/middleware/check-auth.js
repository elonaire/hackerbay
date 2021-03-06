const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.cookies._token;
    jwt.verify(token, "hackerbayinterview");
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Authentication Failed ! Login first!",
      Error: `${error}`
    });
  }
}