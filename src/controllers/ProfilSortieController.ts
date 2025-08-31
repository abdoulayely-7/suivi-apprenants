import { Request, Response } from "express";
import { ProfilSortieService } from "../services/ProfilSortiService.js";
import { PrismaClient } from "@prisma/client";
import { CreateProfilSortieSchema } from "../validators/ProfilSortieValidator.js";

const prisma = new PrismaClient();
const service = new ProfilSortieService(prisma);

export class ProfilSortieController {
    static async getAll(_req: Request, res: Response) {
        const profilSortie = await service.getAllProfilSortie();
        res.json(profilSortie);
    }
    static async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const profilSortie = await service.findProfilSortieById(id);
            if (!profilSortie) {
                return res.status(404).json({ error: "profilSortie non trouvé" });
            }
            return res.json(profilSortie);
        } catch (error: any) {
           return  res.status(400).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = CreateProfilSortieSchema.parse(req.body);
            const profilSortie = await service.createProfilSortie(data);
            res.status(201).json(profilSortie);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({errors});
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const name  = req.body;
            const profilSortie = await service.updateProfilSortie(id, name);
            res.json(profilSortie);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);

            await service.deleteProfilSortie(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
