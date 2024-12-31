const successResponse = (res, data, message = "Request successful", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
}

const errorResponse = (res, error, message = "An error occurred", statusCode = 500) => {
    console.error(error);
    return res.status(statusCode).json({
        success: false,
        message,
        error: error.message || error,
    });
}

const makeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms) )

module.exports = { successResponse, errorResponse, makeDelay }