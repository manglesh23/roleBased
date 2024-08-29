const { generateToken } = require("../middleware/generateToken");
const User = require("../model/user");

const home = async (req, res) => {
  res.status(200).send("Home page for new user");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let checkUser = await User.findOne({ email: email });
  // console.log(checkUser);
  if (!checkUser || !checkUser.comparePassword(password)) {
    res.status(401).json({ msg: "Failed to login Incorrect Credentials" });
    console.log("failed to login");
  }
  let token = generateToken(checkUser);
  // console.log("Token:-",token);
  res.status(200).json({ msg: "Login Successfull", token: token });
};

const createUser = async (req, res) => {
  const { email, role, group } = req.body;
  console.log("create user");
  if (!["Admin", "Power_User", "User"].includes(role)) {
    res.status(400).json({ msg: "Invalid Role" });
  }

  let password = "123456";
  console.log("password:-", password);

  //   let user = new User({ email, password, role });
  try {
    // await user.save();
    // res.status(200).json({ msg: "saved" });
    let createUser = await User.create({
      email,
      password,
      role,
      group,
    });
    res.status(200).json({ msg: createUser });
  } catch (e) {
    console.error("Got Error:-", e);
    res.status(200).json({ msg: e });
    return {
      error: true,
      details: e,
    };
  }
};

module.exports = { createUser, home, login };
