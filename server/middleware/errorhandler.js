const AppError = require("./appError");

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      errorMessage: error.message,
    });
  }
  else{
    return res.status(400).json({error:error.message})
  }
};

module.exports = errorHandler
