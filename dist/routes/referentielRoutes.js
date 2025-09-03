import { Router } from "express";
import { ReferentielController } from "../controllers/ReferentielController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
const router = Router();
router.use(authenticate, authorize("referentiels"));
router.get("/", ReferentielController.getAll);
router.get("/:id", ReferentielController.findById);
router.post("/", ReferentielController.create);
router.delete("/:id", ReferentielController.delete);
router.put("/:id", ReferentielController.update);
router.get("/:id/competences", ReferentielController.getCompetences);
router.post("/:id/competences", ReferentielController.addCompetence);
export default router;
//# sourceMappingURL=referentielRoutes.js.map