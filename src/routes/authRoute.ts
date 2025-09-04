import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { UserService } from "../services/UserService.js";
import { AuthController } from "../controllers/AuthController.js";
import { DefaultTokenService } from "../services/DefaultTokenService.js";
import { UserRepository } from "../repositories/UserRepository.js";

const prisma = new PrismaClient();
const userRepo = new UserRepository(prisma);
const userService = new UserService(userRepo);
const tokens = new DefaultTokenService();
const authController = new AuthController(userService, tokens);

const router = Router();

router.post("/login", (req, res) => authController.login(req, res));

router.post("/refresh", (req, res) => authController.refresh(req, res));

export default router;
