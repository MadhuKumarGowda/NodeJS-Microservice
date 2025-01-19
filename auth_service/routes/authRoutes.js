import { Router } from "express";
import AuthController from "../controller/AuthController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";

const router = Router();

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

// Private route / restricted route
router.get("/auth/user", authMiddleWare, AuthController.user);

export default router;
