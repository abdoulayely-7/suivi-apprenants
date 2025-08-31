import{Router} from "express";
import { TagController } from '../controllers/TagControllers.js';

const router=Router();
router.get("/", TagController.getAll);
router.get("/:id",TagController.findById);
router.post("/",TagController.create);
router.put("/:id",TagController.update);
router.delete("/:id",TagController.delete);
export default router;