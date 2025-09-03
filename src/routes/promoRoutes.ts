// src/routes/promoRoutes.ts
import { Router } from "express";
import { PromoController } from "../controllers/PromoController.js";

import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

const router = Router();

router.use(authenticate, authorize("promos"));

router.get("/:id/formateurs", PromoController.getFormateurs);
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.findById);
router.post("/", PromoController.create);
router.delete("/:id", PromoController.delete);
router.put("/:id", PromoController.update);

export default router;
