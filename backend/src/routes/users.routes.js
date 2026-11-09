import { Router } from "express";
import { createUser, getUsers, getUserById, updateUserById, deleteUserById } from '../controllers/users.controller.js';
import { createUserSchema, updateUserSchema, getUsersQuerySchema } from '../validators/user.validator.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.post("/", validate(createUserSchema),createUser );

router.get("/",validate(getUsersQuerySchema, "query"), getUsers);

router.get("/:id", getUserById);

router.patch("/:id", validate(updateUserSchema), updateUserById);

router.delete("/:id", deleteUserById);

export default router;