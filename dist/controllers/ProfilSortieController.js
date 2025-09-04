import { CreateProfilSortieSchema } from "../validators/ProfilSortieValidator.js";
export class ProfilSortieController {
    profilSortieService;
    constructor(profilSortieService) {
        this.profilSortieService = profilSortieService;
    }
    async getAll(_req, res) {
        const profilSortie = await this.profilSortieService.getAllProfilSortie();
        res.json(profilSortie);
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const profilSortie = await this.profilSortieService.findProfilSortieById(id);
            if (!profilSortie) {
                return res.status(404).json({ error: "profilSortie non trouvé" });
            }
            return res.json(profilSortie);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateProfilSortieSchema.parse(req.body);
            const profilSortie = await this.profilSortieService.createProfilSortie(data);
            res.status(201).json(profilSortie);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const name = req.body;
            const profilSortie = await this.profilSortieService.updateProfilSortie(id, name);
            res.json(profilSortie);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.profilSortieService.deleteProfilSortie(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=ProfilSortieController.js.map