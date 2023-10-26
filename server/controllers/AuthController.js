const User = require("../models/userModel");

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
    res.status(400).json({ error: error.message });
  }
};

module.exports = { Register };
