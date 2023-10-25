const db = require("./config/db");
const app = require("./app");
const dotenv = require("dotenv");

db();
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
