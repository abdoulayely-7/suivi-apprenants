import { Request, Response } from "express";
import { INiveauService } from "../services/interfaces/INiveauService.js";
import { CreateNiveauSchema } from "../validators/NiveauValidator.js";

export class NiveauController{
    constructor(private niveauService: INiveauService) {}

    async getAll(_req: Request, res: Response) {
           const niveau = await this.niveauService.getAllNiveau();
           res.json(niveau);
       }

    async findById(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const niveau = await this.niveauService.findNiveauById(id);
                if (!niveau) {
                    return res.status(404).json({ error: "niveau non trouvé" });
                }
                return res.json(niveau);
            } catch (error: any) {
               return  res.status(400).json({ error: error.message });
            }
        }

    async create(req: Request, res: Response) {
            try {
                const data = CreateNiveauSchema.parse(req.body);
                const niveau = await this.niveauService.createNiveau(data);
                res.status(201).json(niveau);
            } catch (error: any) {
                const errors = error.errors ?? [{ message: error.message }];
                res.status(400).json({errors});
            }
        }

    async update(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const data =  CreateNiveauSchema.parse(req.body);  
                const niveau = await this.niveauService.updateNiveau(id, data);

                res.json(niveau);
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
    async delete(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
    
                await this.niveauService.deleteNiveau(id);
                res.status(204).send();
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
}