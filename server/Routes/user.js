const router = require("express").Router();
const User = require("../Models/User");
const IDException = require("../utils/invalidIdException");
const pagination = require("../utils/Pagination")

// get all user route

router.get("/user", pagination, async (req, res) => {
  const { page, size } = req.pagination;
  const user = await User.findAndCountAll({
    limit: size,
    offset: page * size,
  });
  res.send({
    content: user.rows,
    totalPages: Math.ceil(user.count / Number.parseInt(size)),
  });
});

// get single user route

router.get("/user/:id", IDException, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findOne({ where: { id: userId } });
  res.send(user);
});

// update user route

router.put("/user/:id",IDException, async (req, res, next) => {
  const userId = Number.parseInt(req.params.id);
  const user = await User.findOne({ where: { id: userId } });
  user.username = req.body.username;
  await user.save();
  res.send("Updated successfully!");
});

// delete user route

router.delete("/user/:id",IDException, async (req, res) => {
  const userId = req.params.id;
  await User.destroy({ where: { id: userId } });
  res.send("Deleted Successfully!");
});

module.exports = router;