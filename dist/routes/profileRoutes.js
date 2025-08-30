import { Router } from "express";
import { ProfileController } from "../controllers/ProfileController.js";
const router = Router();
router.get("/", ProfileController.getAll);
router.get("/:id", ProfileController.findById);
router.post("/", ProfileController.create);
router.delete("/:id", ProfileController.delete);
router.put("/:id", ProfileController.update);
export default router;
//# sourceMappingURL=profileRoutes.js.map