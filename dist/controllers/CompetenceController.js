import { PrismaClient } from "@prisma/client";
import { CompetenceService } from "../services/CompetenceService.js";
import { CreateCompetenceSchema } from "../validators/profileValidator.js";
const prisma = new PrismaClient();
const service = new CompetenceService(prisma);
export class CompetenceController {
    static async getAll(_req, res) {
        const competences = await service.getAllCompetences();
        res.json(competences);
    }
    static async findById(req, res) {
        const id = Number(req.params.id);
        const competence = await service.findCompetenceById(id);
        if (!competence)
            return res.status(404).json({ error: "Compétence non trouvée" });
        return res.json(competence);
    }
    static async create(req, res) {
        try {
            const data = CreateCompetenceSchema.parse(req.body);
            const competence = await service.createCompetence(data);
            res.status(201).json(competence);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const data = CreateCompetenceSchema.parse(req.body);
            const id = Number(req.params.id);
            const competence = await service.updateCompetence(id, data);
            res.json(competence);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        const id = Number(req.params.id);
        await service.deleteCompetence(id);
        res.status(204).send();
    }
    static async getNiveaux(req, res) {
        const id = Number(req.params.id);
        const niveaux = await service.getNiveauxForCompetence(id);
        res.json(niveaux);
    }
}
//# sourceMappingURL=CompetenceController.js.map