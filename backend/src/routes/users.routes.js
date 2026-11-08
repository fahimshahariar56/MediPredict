import { Router } from "express";
import { createUser, getUsers, getUserById, updateUserById } from '../controllers/users.controller.js';
import { createUserSchema, updateUserSchema } from '../validators/user.validator.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.post("/", validate(createUserSchema),createUser );

router.get("/", getUsers);

router.get("/:id", getUserById);

router.patch("/:id", validate(updateUserSchema), updateUserById);

export default router;