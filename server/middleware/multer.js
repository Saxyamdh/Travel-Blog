const multer = require("multer");
const path = require("path");
const AppError = require("./appError");

const x = new AppError(400, "Not an Image", 400);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/uploads/profile_pictures");
  },
  filename: (req, file, cb) => {
    const userId = req.params.userId;
    cb(nill, `${Date.now()}-${file.originalname}`);
  },
});

const profileUpload = multer({ storage: storage, fileFilter });
module.exports = profileUpload;
