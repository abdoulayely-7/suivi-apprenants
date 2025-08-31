import { PrismaClient } from "@prisma/client";
import { PromoService } from "../services/PromoService.js";
import { CreatePromoSchema } from "../validators/promoValidator.js";
const prisma = new PrismaClient();
const service = new PromoService(prisma);
export class PromoController {
    static async getFormateurs(req, res) {
        try {
            const id = Number(req.params.id);
            const formateurs = await service.getFormateurs(id);
            if (formateurs.length === 0) {
                res.status(404).json({ error: "Aucun formateur trouvé pour cette promo" });
            }
            res.json(formateurs);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getAll(_req, res) {
        const promos = await service.getAllPromo();
        res.json(promos);
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const promo = await service.findPromoById(id);
            if (!promo) {
                res.status(404).json({ error: "Profil non trouvé" });
            }
            res.json(promo);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreatePromoSchema.parse(req.body);
            const promo = await service.createPromo(data);
            res.status(201).json(promo);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const promoVerif = await service.findPromoById(id);
            if (!promoVerif) {
                res.status(404).json({ error: `Aucun promo non trouvé avec l'id ${id}` });
            }
            const data = CreatePromoSchema.parse(req.body);
            const promo = await service.updatePromo(id, data);
            res.json(promo);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deletePromo(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=PromoController.js.map