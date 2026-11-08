import { Router } from "express";
import healthRoutes from "./health.routes.js";
import userRoutes from "./users.routes.js";

const router = Router();

// Health Check
router.use("/health", healthRoutes);

// User Router
router.use("/users", userRoutes);


export default router;