import { CreatePromoSchema } from "../validators/promoValidator.js";
export class PromoController {
    promoService;
    constructor(promoService) {
        this.promoService = promoService;
    }
    async getFormateurs(req, res) {
        try {
            const id = Number(req.params.id);
            const formateurs = await this.promoService.getFormateurs(id);
            if (formateurs.length === 0) {
                res.status(404).json({ error: "Aucun formateur trouvé pour cette promo" });
            }
            res.json(formateurs);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getAll(_req, res) {
        const promos = await this.promoService.getAllPromo();
        res.json(promos);
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const promo = await this.promoService.findPromoById(id);
            if (!promo) {
                res.status(404).json({ error: "Profil non trouvé" });
            }
            res.json(promo);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreatePromoSchema.parse(req.body);
            const promo = await this.promoService.createPromo(data);
            res.status(201).json(promo);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const promoVerif = await this.promoService.findPromoById(id);
            if (!promoVerif) {
                res.status(404).json({ error: `Aucun promo non trouvé avec l'id ${id}` });
            }
            const data = CreatePromoSchema.parse(req.body);
            const promo = await this.promoService.updatePromo(id, data);
            res.json(promo);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.promoService.deletePromo(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=PromoController.js.map