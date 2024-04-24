const BadRequest = require("../errors/bad-request");

const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    throw new BadRequest("Please provide username and password");
  }
  console.log(userName, password);
  res.send("login route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello mondher`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
