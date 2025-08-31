import { ReferentielService } from "../services/ReferentielService.js";
import { PrismaClient } from "@prisma/client";
import { CreateReferentielSchema, AddCompetenceToReferentielSchema } from "../validators/referentielValidator.js";
const prisma = new PrismaClient();
const service = new ReferentielService(prisma);
export class ReferentielController {
    static async getAll(_req, res) {
        const referentiels = await service.getAllReferentiels();
        res.json(referentiels);
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const referentiel = await service.findReferentielById(id);
            if (!referentiel) {
                return res.status(404).json({ error: "Référentiel non trouvé" });
            }
            return res.json(referentiel);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreateReferentielSchema.parse(req.body);
            const referentiel = await service.createReferentiel(data);
            res.status(201).json(referentiel);
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
            const referentiel = await service.updateReferentiel(id, { name });
            res.json(referentiel);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deleteReferentiel(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getCompetences(req, res) {
        try {
            const id = Number(req.params.id);
            const competences = await service.getCompetencesByReferentielId(id);
            res.json(competences);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async addCompetence(req, res) {
        try {
            const referentielId = Number(req.params.id);
            const data = AddCompetenceToReferentielSchema.parse(req.body);
            await service.addCompetenceToReferentiel(referentielId, data.competenceId);
            res.status(201).json({ message: "Compétence ajoutée au référentiel" });
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
}
//# sourceMappingURL=ReferentielController.js.map