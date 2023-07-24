const InvalidException = require("./exceptionId")

module.exports = (req, res, next) => {
  const userId = parseInt(req.params.id);
  if (Number.isNaN(userId)) {
    throw new InvalidException();
  }
  next();
};
