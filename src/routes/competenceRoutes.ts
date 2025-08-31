import { Router } from "express";
import { CompetenceController } from "../controllers/CompetenceController.js";

const router = Router();
router.get("/", CompetenceController.getAll);
router.get("/:id", CompetenceController.findById);
router.post("/", CompetenceController.create);
router.delete("/:id", CompetenceController.delete);
router.put("/:id", CompetenceController.update);

export default router;
