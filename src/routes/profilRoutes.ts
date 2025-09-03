
import { Router } from "express";
import { ProfileController } from "../controllers/ProfilController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

const router = Router();

router.use(authenticate, authorize("profiles"));

router.get("/", ProfileController.getAll);
router.get("/:id", ProfileController.findById);
router.post("/", ProfileController.create);
router.delete("/:id", ProfileController.delete);
router.put("/:id", ProfileController.update);

export default router;
