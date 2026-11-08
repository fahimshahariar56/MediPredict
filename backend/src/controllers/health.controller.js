
export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "MediPredict API is running",
    timestamp: new Date().toISOString()
  });
};
