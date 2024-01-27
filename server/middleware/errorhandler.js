const AppError = require("./appError");

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      errorCode: error.errorCode,
      errorMessage: error.message,
    });
  }
  else{
    console.log(error.message)
    return res.status(400).json({error:error.message})
  }
};

module.exports = errorHandler
