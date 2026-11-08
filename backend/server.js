import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try { 
    await connectDB();
    
    app.listen(PORT, () => {
    console.log(`MediPredict API running on port ${PORT}`);
    });

    
  }
  
  catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}


startServer();


