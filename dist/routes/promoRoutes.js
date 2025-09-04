import { Router } from "express";
import { PromoController } from "../controllers/PromoController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
import { Container } from "../container/Container.js";
const container = new Container();
const promoController = new PromoController(container.getPromoService());
const router = Router();
router.use(authenticate, authorize("promos"));
router.get("/:id/formateurs", (req, res) => promoController.getFormateurs(req, res));
router.get("/", (req, res) => promoController.getAll(req, res));
router.get("/:id", (req, res) => promoController.findById(req, res));
router.post("/", (req, res) => promoController.create(req, res));
router.delete("/:id", (req, res) => promoController.delete(req, res));
router.put("/:id", (req, res) => promoController.update(req, res));
export default router;
//# sourceMappingURL=promoRoutes.js.map