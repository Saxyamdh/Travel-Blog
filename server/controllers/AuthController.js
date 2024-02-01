const User = require("../models/userModel");
const { validateRegister } = require("../middleware/validation/validator");
const AppError = require("../middleware/appError");
const sendEmail = require("../middleware/validation/mailer");

const generateUniqueCode = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

const Register = async (req, res) => {
  const errors = validateRegister(req.body);
  if (errors === false) {
    throw new AppError(process.env.INVALIDENTRY, "Check your Field Entry", 409);
  }
  const { firstName, lastName, age, gender, userName, email, password } =
    req.body;
  var verification_code = generateUniqueCode();
  await sendEmail(email, verification_code);
  const user = await User.Register(
    firstName,
    lastName,
    age,
    gender,
    userName,
    email,
    password,
    verification_code
  );

  return res.status(200).json(`Verification Code sent at ${email}`);
};

const Verify = async (req, res) => {
  const { VerificationCode } = req.body;
  const user = await User.findOne({ verification_code: VerificationCode });
  if (!user) {
    throw new AppError(process.env.UNSUCCESS, "Code doesn't match", 400);
  }
  user.verified = true;
  user.verification_code = null;
  await user.save();
  const token = await user.generateAuthToken(user._id);
  return res.status(200).json({ UserName: user.user_name, token });
};

const LogIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.Login(email, password);
  if (!user.verified) {
    throw AppError(process.env.UNAUTHORIZED, "User Not Verified", 400);
  }
  const token = await user.generateAuthToken(user._id);
  return res.status(200).json({ UserName: user.user_name, token });
};
module.exports = { Register, Verify, LogIn };
