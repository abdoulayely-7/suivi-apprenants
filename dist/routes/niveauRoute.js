import { Router } from "express";
import { NiveauController } from "../controllers/NiveauController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
import { Container } from "../container/Container.js";
const container = new Container();
const niveauController = new NiveauController(container.getNiveauService());
const router = Router();
router.use(authenticate, authorize("profilSorties"));
router.get("/", (req, res) => niveauController.getAll(req, res));
router.get("/:id", (req, res) => niveauController.findById(req, res));
router.post("/", (req, res) => niveauController.create(req, res));
router.delete("/:id", (req, res) => niveauController.delete(req, res));
router.put("/:id", (req, res) => niveauController.update(req, res));
export default router;
//# sourceMappingURL=niveauRoute.js.map