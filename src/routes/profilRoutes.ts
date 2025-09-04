import { Router } from "express";
import { Container } from "../container/Container.js";
import { ProfileController } from "../controllers/ProfilController.js";

const container = new Container();
const profilController = new ProfileController(container.getProfilService());

const router = Router();

router.get("/", (req, res) => profilController.getAll(req, res));
router.get("/:id", (req, res) => profilController.findById(req, res));
router.post("/", (req, res) => profilController.create(req, res));
router.delete("/:id", (req, res) => profilController.delete(req, res));
router.put("/:id", (req, res) => profilController.update(req, res));

export default router;
