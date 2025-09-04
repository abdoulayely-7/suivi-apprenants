import { CreateReferentielSchema, AddCompetenceToReferentielSchema, AddCompetencesToReferentielSchema } from "../validators/referentielValidator.js";
export class ReferentielController {
    referentielService;
    constructor(referentielService) {
        this.referentielService = referentielService;
    }
    async getAll(_req, res) {
        const referentiels = await this.referentielService.getAllReferentiels();
        res.json(referentiels);
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const referentiel = await this.referentielService.findReferentielById(id);
            if (!referentiel) {
                return res.status(404).json({ error: "Référentiel non trouvé" });
            }
            return res.json(referentiel);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateReferentielSchema.parse(req.body);
            const referentiel = await this.referentielService.createReferentiel(data);
            res.status(201).json(referentiel);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;
            const referentiel = await this.referentielService.updateReferentiel(id, { name });
            res.json(referentiel);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.referentielService.deleteReferentiel(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getCompetences(req, res) {
        try {
            const id = Number(req.params.id);
            const competences = await this.referentielService.getCompetencesByReferentielId(id);
            res.json(competences);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async addCompetence(req, res) {
        try {
            const referentielId = Number(req.params.id);
            // Détecter si c'est un tableau ou un seul ID
            if (Array.isArray(req.body.competenceIds)) {
                const data = AddCompetencesToReferentielSchema.parse(req.body);
                await this.referentielService.addCompetencesToReferentiel(referentielId, data.competenceIds);
                res.status(201).json({ message: `${data.competenceIds.length} compétences ajoutées au référentiel` });
            }
            else {
                const data = AddCompetenceToReferentielSchema.parse(req.body);
                await this.referentielService.addCompetenceToReferentiel(referentielId, data.competenceId);
                res.status(201).json({ message: "Compétence ajoutée au référentiel" });
            }
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
}
//# sourceMappingURL=ReferentielController.js.map