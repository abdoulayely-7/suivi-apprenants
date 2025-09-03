import { Request, Response } from "express";
import { ReferentielService } from "../services/ReferentielService.js";
import { PrismaClient } from "@prisma/client";
import { CreateReferentielSchema, AddCompetenceToReferentielSchema, AddCompetencesToReferentielSchema } from "../validators/referentielValidator.js";

const prisma = new PrismaClient();
const service = new ReferentielService(prisma);

export class ReferentielController {
    
    static async getAll(_req: Request, res: Response) {
        const referentiels = await service.getAllReferentiels();
        res.json(referentiels);
    }

    static async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const referentiel = await service.findReferentielById(id);
            if (!referentiel) {
                return res.status(404).json({ error: "Référentiel non trouvé" });
            }
            return res.json(referentiel);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = CreateReferentielSchema.parse(req.body);
            const referentiel = await service.createReferentiel(data);
            res.status(201).json(referentiel);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const { name } = req.body;
            const referentiel = await service.updateReferentiel(id, { name });
            res.json(referentiel);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await service.deleteReferentiel(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getCompetences(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const competences = await service.getCompetencesByReferentielId(id);
            res.json(competences);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async addCompetence(req: Request, res: Response) {
        try {
            const referentielId: number = Number(req.params.id);
            
            // Détecter si c'est un tableau ou un seul ID
            if (Array.isArray(req.body.competenceIds)) {
                const data = AddCompetencesToReferentielSchema.parse(req.body);
                await service.addCompetencesToReferentiel(referentielId, data.competenceIds);
                res.status(201).json({ message: `${data.competenceIds.length} compétences ajoutées au référentiel` });
            } else {
                const data = AddCompetenceToReferentielSchema.parse(req.body);
                await service.addCompetenceToReferentiel(referentielId, data.competenceId);
                res.status(201).json({ message: "Compétence ajoutée au référentiel" });
            }
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
}
