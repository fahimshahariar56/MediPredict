import { Router } from "express";
import { createUser } from '../controllers/users.controller.js';
import { createUserSchema } from '../validators/user.validator.js'
import { validate } from '../middlewares/validate.middleware.js'

const router = Router();

router.post("/",
    validate(createUserSchema),
    createUser
);


export default router;