import { Router } from "express";
import { login, signup } from "../controllers/auth.controllers.js";
import { validateUser } from "../middlewares/authValidation.js";
import { loginSchema, signupSchema } from "../validator/zodValidator.js";

const router = Router();

router.route("/signup").post(validateUser(signupSchema), signup);
router.route("/login").post(validateUser(loginSchema), login);

export default router;
