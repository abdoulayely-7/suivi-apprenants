import { Router } from "express";
import { Container } from "../container/Container.js";
import { ReferentielController } from "../controllers/ReferentielController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
const container = new Container();
const referentielController = new ReferentielController(container.getReferentielService());
const router = Router();
router.use(authenticate, authorize("referentiels"));
router.get("/", (req, res) => referentielController.getAll(req, res));
router.get("/:id", (req, res) => referentielController.findById(req, res));
router.post("/", (req, res) => referentielController.create(req, res));
router.delete("/:id", (req, res) => referentielController.delete(req, res));
router.put("/:id", (req, res) => referentielController.update(req, res));
router.get("/:id/competences", (req, res) => referentielController.getCompetences(req, res));
router.post("/:id/competences", (req, res) => referentielController.addCompetence(req, res));
export default router;
//# sourceMappingURL=referentielRoutes.js.map