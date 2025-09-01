import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const router = Router();

router.get("/", UserController.getAll);           
router.get("/:id", UserController.findById);     
router.post("/", UserController.create);         
router.put("/:id", UserController.update);       
router.delete("/:id", UserController.delete);   
export default router;
