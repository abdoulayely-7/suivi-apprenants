import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

import { Container } from "../container/Container.js";

const container = new Container();
const userController = new UserController(container.getUserService());

const router = Router();

router.use(authenticate, authorize("users"));

router.get("/", (req, res) => userController.getAll(req, res));
router.get("/:id", (req, res) => userController.findById(req, res));
router.post("/", (req, res) => userController.create(req, res));
router.put("/:id", (req, res) => userController.update(req, res));
router.delete("/:id", (req, res) => userController.delete(req, res));

export default router;
