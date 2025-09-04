import{Router} from "express";
import { TagController } from '../controllers/TagControllers.js';
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/rbacMiddleware.js";
import { PrismaClient } from "@prisma/client";
import { TagService } from "../services/TagService.js";
import { TagRepository } from "../repositories/TagRepository.js";

const prisma = new PrismaClient();
const tagRepo = new TagRepository(prisma);
const tagService = new TagService(tagRepo);
const tagController = new TagController(tagService);

const router = Router();

router.use(authenticate, authorize("tags"));
router.get("/", (req, res) => tagController.getAll(req, res));
router.get("/:id", (req, res) => tagController.findById(req, res));
router.post("/", (req, res) => tagController.create(req, res));
router.put("/:id", (req, res) => tagController.update(req, res));
router.delete("/:id", (req, res) => tagController.delete(req, res));
export default router;