import { Router } from "express";
import { NiveauController } from "../controllers/NiveauController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

const router = Router();

router.use(authenticate, authorize("profilSorties"));
router.get("/", NiveauController.getAll);
router.get("/:id", NiveauController.findById);
router.post("/", NiveauController.create);
router.delete("/:id", NiveauController.delete);
router.put("/:id", NiveauController.update);

export default router;
