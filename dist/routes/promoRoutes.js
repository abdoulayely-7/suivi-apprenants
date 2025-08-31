// src/routes/promoRoutes.ts
import { Router } from "express";
import { PromoController } from "../controllers/PromoController.js";
const router = Router();
router.get("/:id/formateurs", PromoController.getFormateurs);
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.findById);
router.post("/", PromoController.create);
router.delete("/:id", PromoController.delete);
router.put("/:id", PromoController.update);
export default router;
//# sourceMappingURL=promoRoutes.js.map