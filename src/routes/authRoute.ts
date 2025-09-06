import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { Container } from "../container/Container.js";

const container = new Container();
const authController = new AuthController(
  container.getUserService(),
  container.getTokenService()
);

const router = Router();

router.post("/login", (req, res) => authController.login(req, res));
router.post("/refresh", (req, res) => authController.refresh(req, res));

export default router;
