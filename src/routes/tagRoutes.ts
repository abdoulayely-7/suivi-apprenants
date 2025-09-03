import{Router} from "express";
import { TagController } from '../controllers/TagControllers.js';

import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

const router = Router();

router.use(authenticate, authorize("tags"));
router.get("/", TagController.getAll);
router.get("/:id",TagController.findById);
router.post("/",TagController.create);
router.put("/:id",TagController.update);
router.delete("/:id",TagController.delete);
export default router;