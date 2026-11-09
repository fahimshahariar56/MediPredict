import connectDB from "../config/database.js";

export const getHealth = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "MediPredict API is running",
    timestamp: new Date().toISOString(),
    status: await connectDB()
            .then(() => "Database connection successful")
            .catch((error) => `Database connection failed: ${error.message}`),
  });
};
