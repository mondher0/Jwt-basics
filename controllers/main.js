const BadRequest = require("../errors/bad-request");
const Unauthorized = require("../errors/unauthorized");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new BadRequest("Please provide username and password");
  }

  const id = new Date().getTime();

  // create a token for the user with the id and userName this id and userName we name it payload
  const payload = { id, username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
    token,
  });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
