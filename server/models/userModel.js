const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AppError = require("../middleware/appError");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verification_code: {
    type: Number,
    required: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  phone_Number: {
    type: Number,
    required: false,
    default: null,
  },
});

//User Register system

UserSchema.statics.Register = async function (
  first_name,
  last_name,
  age,
  gender,
  user_name,
  email,
  password,
  verification_code,
  phone_number
) {
  const emailExists = await this.findOne({ email });
  const userNameExists = await this.findOne({ user_name });
  if (emailExists) {
    throw new AppError(process.env.DUPLICATE, "Email already exists", 400);
  }
  if (userNameExists) {
    throw new AppError(process.env.DUPLICATE, "UserName already exists", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    first_name,
    last_name,
    age,
    gender,
    user_name,
    email,
    password: hash,
    verification_code,
  });
  return user;
};

//generating jwt token for users
UserSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    return error;
  }
};

UserSchema.statics.Login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new AppError(
      process.env.INVALIDENTRY,
      "Invalid User name or password",
      400
    );
  }

  const match = bcrypt.compare(password, user.password);
  if (!match) {
    throw new AppError(
      process.env.INVALIDENTRY,
      "Invalid User name or password",
      400
    );
  }
  return user;
};

const User = mongoose.model("users", UserSchema);

module.exports = User;
