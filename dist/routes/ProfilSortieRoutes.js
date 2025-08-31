import { Router } from "express";
import { ProfilSortieController } from "../controllers/ProfilSortieController.js";
const router = Router();
router.get("/", ProfilSortieController.getAll);
router.get("/:id", ProfilSortieController.findById);
router.post("/", ProfilSortieController.create);
router.delete("/:id", ProfilSortieController.delete);
router.put("/:id", ProfilSortieController.update);
export default router;
//# sourceMappingURL=ProfilSortieRoutes.js.map