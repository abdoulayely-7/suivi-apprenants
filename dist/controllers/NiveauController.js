import { CreateNiveauSchema } from "../validators/NiveauValidator.js";
export class NiveauController {
    niveauService;
    constructor(niveauService) {
        this.niveauService = niveauService;
    }
    async getAll(_req, res) {
        const niveau = await this.niveauService.getAllNiveau();
        res.json(niveau);
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const niveau = await this.niveauService.findNiveauById(id);
            if (!niveau) {
                return res.status(404).json({ error: "niveau non trouvé" });
            }
            return res.json(niveau);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateNiveauSchema.parse(req.body);
            const niveau = await this.niveauService.createNiveau(data);
            res.status(201).json(niveau);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = CreateNiveauSchema.parse(req.body);
            const niveau = await this.niveauService.updateNiveau(id, data);
            res.json(niveau);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.niveauService.deleteNiveau(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=NiveauController.js.map