import { Router } from "express";
import { TagController } from '../controllers/TagControllers.js';
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
import { Container } from "../container/Container.js";
const container = new Container();
const tagController = new TagController(container.getTagService());
const router = Router();
router.use(authenticate, authorize("tags"));
router.get("/", (req, res) => tagController.getAll(req, res));
router.get("/:id", (req, res) => tagController.findById(req, res));
router.post("/", (req, res) => tagController.create(req, res));
router.put("/:id", (req, res) => tagController.update(req, res));
router.delete("/:id", (req, res) => tagController.delete(req, res));
export default router;
//# sourceMappingURL=tagRoutes.js.map