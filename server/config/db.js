const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./../config.env" });
const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const dbConnect = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
      })
      .then((con) => {
        // console.log(con.connections);
        console.log("Database connection successfull");
      });
  } catch (err) {
    console.log("Connection to database failed");
  }
};

module.exports = dbConnect;
