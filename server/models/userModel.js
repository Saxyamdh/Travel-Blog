const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Validator = require("validator");
const isEmpty = require("../middleware/validation/is-empty");

dotenv.config({ path: "server/config.env" });
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.statics.Register = async function (
  FirstName,
  LastName,
  userName,
  email,
  password
) {

  const exists = await this.findOne({ email, userName });

  if (exists) {
    throw Error("Email already in use");
  }

  // const IsEmpty = await isEmpty({
  //   FirstName,
  //   LastName,
  //   userName,
  //   email,
  //   password,
  // });
  // console.log("Yeta", IsEmpty);
  // if (IsEmpty) {
  //   throw Error("Fill all the required details");
  // }

  //default value is 10 and the higher the number the longer it takes for the user to sign in
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    FirstName,
    LastName,
    userName,
    email,
    password: hash,
  });

  return user;
};

UserSchema.methods.generateAuthToklen = function () {
  try{
    const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    console.log("JWT token: ", token);
    return token;
  }catch(err){
    console.log(err)
    throw Error ("Error message",err)
  }
};

const User = mongoose.model("users", UserSchema);

module.exports = User;
