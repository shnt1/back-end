const jwt = require("jsonwebtoken");
const secrets = require("../api/config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized access" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
