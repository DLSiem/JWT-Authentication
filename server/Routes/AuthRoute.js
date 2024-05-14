import { Signup, Login } from "../Controllers/AuthController.js";
import { Router } from "express";
import { userVerification } from "../middlewares/AuthMiddleware.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

export default router;
