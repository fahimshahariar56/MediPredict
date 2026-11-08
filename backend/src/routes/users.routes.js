import { Router } from "express";
import { createUser, getUsers } from '../controllers/users.controller.js';
import { createUserSchema } from '../validators/user.validator.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.post("/", validate(createUserSchema),createUser );

router.get("/", getUsers);

export default router;