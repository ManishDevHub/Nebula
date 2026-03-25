
import { Router } from "express";
import { Login, register } from "../controller/authController";
import { validate } from "../middlewares/validate";
import { loginSchema, registerSchema } from "../validation/auth.validation";

 export const router = Router();
router.post("/register" , validate(registerSchema) , register);
router.post("/login" , validate(loginSchema) , Login);