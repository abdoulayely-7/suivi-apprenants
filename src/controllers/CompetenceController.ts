import { Request, Response } from "express";
import { CompetenceService } from "../services/CompetenceService.js";  
import { PrismaClient } from "@prisma/client";
import { CreateCompetenceSchema } from "../validators/competenceValidator.js";

const prisma = new PrismaClient();
const service = new CompetenceService(prisma);

export class CompetenceController{
    static async getAll(_req: Request, res: Response) {
           const competence = await service.getAllCompetence();
           res.json(competence);
       }

    static async findById(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const competence = await service.findCompetenceById(id);
                if (!competence) {
                    return res.status(404).json({ error: "competence non trouvé" });
                }
                return res.json(competence);
            } catch (error: any) {
               return  res.status(400).json({ error: error.message });
            }
        }

    static async create(req: Request, res: Response) {
            try {
                const data = CreateCompetenceSchema.parse(req.body);
                const competence = await service.createCompetence(data);
                res.status(201).json(competence);
            } catch (error: any) {
                const errors = error.errors ?? [{ message: error.message }];
                res.status(400).json({errors});
            }
        }

    static async update(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const data = CreateCompetenceSchema.parse(req.body);  
                const competence = await service.updateCompetence(id, data);

                res.json(competence);
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
    static async delete(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
    
                await service.deleteComptence(id);
                res.status(204).send();
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
}