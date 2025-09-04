import { CreateCompetenceSchema } from "../validators/CompetenceValidator.js";
export class CompetenceController {
    competenceService;
    constructor(competenceService) {
        this.competenceService = competenceService;
    }
    async getAll(_req, res) {
        const competences = await this.competenceService.getAllCompetences();
        res.json(competences);
    }
    async findById(req, res) {
        const id = Number(req.params.id);
        const competence = await this.competenceService.findCompetenceById(id);
        if (!competence)
            return res.status(404).json({ error: "Compétence non trouvée" });
        return res.json(competence);
    }
    async create(req, res) {
        try {
            const data = CreateCompetenceSchema.parse(req.body);
            const competence = await this.competenceService.createCompetence(data);
            res.status(201).json(competence);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const data = CreateCompetenceSchema.parse(req.body);
            const id = Number(req.params.id);
            const competence = await this.competenceService.updateCompetence(id, data);
            res.json(competence);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        const id = Number(req.params.id);
        await this.competenceService.deleteCompetence(id);
        res.status(204).send();
    }
    async getNiveaux(req, res) {
        const id = Number(req.params.id);
        const niveaux = await this.competenceService.getNiveauxForCompetence(id);
        res.json(niveaux);
    }
}
//# sourceMappingURL=CompetenceController.js.map