import { Request, Response } from "express";
import { NiveauService } from "../services/NiveauService.js";  
import { PrismaClient } from "@prisma/client";
 

const prisma = new PrismaClient();
const service = new NiveauService(prisma);

export class NiveauController{
    static async getAll(_req: Request, res: Response) {
           const niveau = await service.getAllNiveau();
           res.json(niveau);
       }

    static async findById(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const niveau = await service.findNiveauById(id);
                if (!niveau) {
                    return res.status(404).json({ error: "niveau non trouvé" });
                }
                return res.json(niveau);
            } catch (error: any) {
               return  res.status(400).json({ error: error.message });
            }
        }

    static async create(req: Request, res: Response) {
            try {
                const data = req.body;
                const niveau = await service.createNiveau(data);
                res.status(201).json(niveau);
            } catch (error: any) {
                const errors = error.errors ?? [{ message: error.message }];
                res.status(400).json({errors});
            }
        }

    static async update(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
                const data = req.body;  
                const niveau = await service.updateNiveau(id, data);

                res.json(niveau);
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
    static async delete(req: Request, res: Response) {
            try {
                const id: number = Number(req.params.id);
    
                await service.deleteNiveau(id);
                res.status(204).send();
            } catch (error: any) {
                res.status(400).json({ error: error.message });
            }
        }
    
}