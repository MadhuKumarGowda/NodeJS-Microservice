import { Router } from "express";
import PostController from "../controller/PostController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";
const router = Router();

router.get("/post", PostController.index);
router.post("/post", authMiddleWare, PostController.store);
export default router;
