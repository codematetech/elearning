const User = require("./Models/User");
const jwt = require("jsonwebtoken")


const verify = async (req, res, next) => {
    const authorisation = req.headers.token;
    if (authorisation) {
      const token = authorisation.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET.KEY, (err, user) => {
        if (err) res.status(403).json("Invalid Token");
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("Not authenticated");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  authVerify(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};