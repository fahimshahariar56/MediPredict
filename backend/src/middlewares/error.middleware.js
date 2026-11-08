const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID",
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Email already exists",
            error: err.keyValue,
        });
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorMiddleware;