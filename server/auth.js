const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./Models/User");
const bcrypt = require("bcryptjs");
const transporter = require("./sendEmail");

// register

// create user route

router.post("/user", async (req, res) => {
   const { name, surname, username, password, email, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await User.create({
      name,
      surname,
      username,
      password: hash,
      email,
      role,
    });
    transporter.sendMail({
      to:email,
      from:"info@xpolre.com",
      subject:"Welcoming Email.",
      text: "HELLO WORLD"
    })
    return res.send("User inserted");
  } catch (error) {
    res.send(error);
  }
});

// login
router.post("/api/auth/", (req, res) => {
  const cred = req.body;

  const user = User.findOne({ where: { email: cred.email } });
  if (!user && user.password !== cred.password) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
  return res.send({ token });
});
