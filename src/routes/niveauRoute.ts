import { Router } from "express";
import { NiveauController } from "../controllers/NiveauController.js";

const router = Router();
router.get("/", NiveauController.getAll);
router.get("/:id", NiveauController.findById);
router.post("/", NiveauController.create);
router.delete("/:id", NiveauController.delete);
router.put("/:id", NiveauController.update);

export default router;
