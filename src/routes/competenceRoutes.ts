
import { Router } from "express";
import { CompetenceController } from "../controllers/CompetenceController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
import { Container } from "../container/Container.js";


const container = new Container();
const competenceController = new CompetenceController(container.getCompetenceService());

const router = Router();

router.use(authenticate, authorize("competences"));

router.get("/", (req, res) => competenceController.getAll(req, res));
router.get("/:id", (req, res) => competenceController.findById(req, res));
router.post("/", (req, res) => competenceController.create(req, res));
router.put("/:id", (req, res) => competenceController.update(req, res));
router.delete("/:id", (req, res) => competenceController.delete(req, res));
router.get("/:id/niveaux", (req, res) => competenceController.getNiveaux(req, res));

export default router;
