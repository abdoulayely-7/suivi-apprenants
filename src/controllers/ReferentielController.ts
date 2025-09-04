import { Request, Response } from "express";
import { IReferentielService } from "../services/interfaces/IReferentielService.js";
import { CreateReferentielSchema, AddCompetenceToReferentielSchema, AddCompetencesToReferentielSchema } from "../validators/referentielValidator.js";

export class ReferentielController {
    constructor(private referentielService: IReferentielService) {}
    
    async getAll(_req: Request, res: Response) {
        const referentiels = await this.referentielService.getAllReferentiels();
        res.json(referentiels);
    }

    async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const referentiel = await this.referentielService.findReferentielById(id);
            if (!referentiel) {
                return res.status(404).json({ error: "Référentiel non trouvé" });
            }
            return res.json(referentiel);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = CreateReferentielSchema.parse(req.body);
            const referentiel = await this.referentielService.createReferentiel(data);
            res.status(201).json(referentiel);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const { name } = req.body;
            const referentiel = await this.referentielService.updateReferentiel(id, { name });
            res.json(referentiel);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await this.referentielService.deleteReferentiel(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCompetences(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const competences = await this.referentielService.getCompetencesByReferentielId(id);
            res.json(competences);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async addCompetence(req: Request, res: Response) {
        try {
            const referentielId: number = Number(req.params.id);
            
            // Détecter si c'est un tableau ou un seul ID
            if (Array.isArray(req.body.competenceIds)) {
                const data = AddCompetencesToReferentielSchema.parse(req.body);
                await this.referentielService.addCompetencesToReferentiel(referentielId, data.competenceIds);
                res.status(201).json({ message: `${data.competenceIds.length} compétences ajoutées au référentiel` });
            } else {
                const data = AddCompetenceToReferentielSchema.parse(req.body);
                await this.referentielService.addCompetenceToReferentiel(referentielId, data.competenceId);
                res.status(201).json({ message: "Compétence ajoutée au référentiel" });
            }
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
}
