import { Router } from "express";
import { ProfilSortieController } from "../controllers/ProfilSortieController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
// ... existing code ...
import { Container } from "../container/Container.js";

const container = new Container();
const profilSortieController = new ProfilSortieController(container.getProfilSortieService());

const router = Router();

router.use(authenticate, authorize("niveaux"));
router.get("/", (req, res) => profilSortieController.getAll(req, res));
router.get("/:id", (req, res) => profilSortieController.findById(req, res));
router.post("/", (req, res) => profilSortieController.create(req, res));
router.delete("/:id", (req, res) => profilSortieController.delete(req, res));
router.put("/:id", (req, res) => profilSortieController.update(req, res));

export default router;
// ... existing code ...