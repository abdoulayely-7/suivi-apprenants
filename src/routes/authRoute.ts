import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { UserService } from "../services/UserService.js";
import { AuthController } from "../controllers/AuthController.js";

const prisma = new PrismaClient();
const userService = new UserService(prisma);
const authController = new AuthController(userService);

const router = Router();

router.post("/login", (req, res) => authController.login(req, res));
router.post("/refresh", (req, res) => authController.refresh(req, res));

export default router;
