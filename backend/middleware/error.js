const ErrorHandler = require("../utils/errorHandler");
//import from utils
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500,
        err.message = err.message || "Internal Server Error";

    //wrong mongodb Id  error
    if (err.name === "CastError") {
        const message = `Resource not found.Invalid: ${err.path}`;
        err = new ErrorHandler(message, 404);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        //better error handling it provide what exactly error is
    });


}