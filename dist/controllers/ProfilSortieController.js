import { ProfilSortieService } from "../services/ProfilSortiService.js";
import { PrismaClient } from "@prisma/client";
import { CreateProfilSortieSchema } from "../validators/ProfilSortieValidator.js";
const prisma = new PrismaClient();
const service = new ProfilSortieService(prisma);
export class ProfilSortieController {
    static async getAll(_req, res) {
        const profilSortie = await service.getAllProfilSortie();
        res.json(profilSortie);
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const profilSortie = await service.findProfilSortieById(id);
            if (!profilSortie) {
                return res.status(404).json({ error: "profilSortie non trouvé" });
            }
            return res.json(profilSortie);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreateProfilSortieSchema.parse(req.body);
            const profilSortie = await service.createProfilSortie(data);
            res.status(201).json(profilSortie);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;
            const profilSortie = await service.updateProfilSortie(id, name);
            res.json(profilSortie);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deleteProfilSortie(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=ProfilSortieController.js.map