const jwt = require("jsonwebtoken");
const AppError = require("../appError");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError(
      process.env.UNAUTHORIZED,
      "Authentication required",
      400
    );
  }
  const token = authorization.split(" ")[1];
  const verification = jwt.verify(token, process.env.JWTPRIVATEKEY);
  const  user_id  = verification._id;
  return res.status(200).json({ UserId: user_id });
};

module.exports = requireAuth;
