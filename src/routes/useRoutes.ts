import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";

const router = Router();

router.use(authenticate, authorize("users"));


router.get("/", UserController.getAll);           
router.get("/:id", UserController.findById);     
router.post("/", UserController.create);         
router.put("/:id", UserController.update);       
router.delete("/:id", UserController.delete);   
export default router;
