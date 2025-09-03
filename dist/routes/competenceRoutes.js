import { Router } from "express";
import { CompetenceController } from "../controllers/CompetenceController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
const router = Router();
router.use(authenticate, authorize("competences"));
router.get("/", CompetenceController.getAll);
router.get("/:id", CompetenceController.findById);
router.post("/", CompetenceController.create);
router.put("/:id", CompetenceController.update);
router.delete("/:id", CompetenceController.delete);
router.get("/:id/niveaux", CompetenceController.getNiveaux);
export default router;
//# sourceMappingURL=competenceRoutes.js.map