class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor);
        //oops methods
    }

}

module.exports = ErrorHandler;