import { Router } from "express";
import { createUser, getUsers, getUserById } from '../controllers/users.controller.js';
import { createUserSchema } from '../validators/user.validator.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.post("/", validate(createUserSchema),createUser );

router.get("/", getUsers);

router.get("/:id", getUserById);

export default router;