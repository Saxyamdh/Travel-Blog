const User = require("../models/userModel");


//Register Controller
const Register = async (req, res) => {
  const { FirstName, LastName, userName, email, password } = req.body;

  try {
    const user = await User.Register(
      FirstName,
      LastName,
      userName,
      email,
      password
    );
    const UserName = user.userName;
    const token = await user.generateAuthToken(user._id);
    res.status(200).json({ UserName, token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

//Login Controller
const LogIn = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login  Request")
  try {
    const user = await User.LogIn(email, password);
    const UserNmae = user.userName;
    const token = await user.generateAuthToken(user._id);
    res.status(200).json({ UserNmae, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { Register, LogIn };
