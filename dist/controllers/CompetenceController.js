import { CompetenceService } from "../services/CompetenceService.js";
import { PrismaClient } from "@prisma/client";
import { CreateCompetenceSchema } from "../validators/competenceValidator.js";
const prisma = new PrismaClient();
const service = new CompetenceService(prisma);
export class CompetenceController {
    static async getAll(_req, res) {
        const competence = await service.getAllCompetence();
        res.json(competence);
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const competence = await service.findCompetenceById(id);
            if (!competence) {
                return res.status(404).json({ error: "competence non trouvé" });
            }
            return res.json(competence);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreateCompetenceSchema.parse(req.body);
            const competence = await service.createCompetence(data);
            res.status(201).json(competence);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = CreateCompetenceSchema.parse(req.body);
            const competence = await service.updateCompetence(id, data);
            res.json(competence);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deleteComptence(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=CompetenceController.js.map