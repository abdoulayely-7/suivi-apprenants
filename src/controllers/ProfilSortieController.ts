import { Request, Response } from "express";
import { IProfilSortieService } from "../services/interfaces/IProfilSortieService.js";
import { CreateProfilSortieSchema } from "../validators/ProfilSortieValidator.js";

export class ProfilSortieController {
    constructor(private profilSortieService: IProfilSortieService) {}

    async getAll(_req: Request, res: Response) {
        const profilSortie = await this.profilSortieService.getAllProfilSortie();
        res.json(profilSortie);
    }
    
    async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const profilSortie = await this.profilSortieService.findProfilSortieById(id);
            if (!profilSortie) {
                return res.status(404).json({ error: "profilSortie non trouvé" });
            }
            return res.json(profilSortie);
        } catch (error: any) {
           return  res.status(400).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = CreateProfilSortieSchema.parse(req.body);
            const profilSortie = await this.profilSortieService.createProfilSortie(data);
            res.status(201).json(profilSortie);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({errors});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const name  = req.body;
            const profilSortie = await this.profilSortieService.updateProfilSortie(id, name);
            res.json(profilSortie);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);

            await this.profilSortieService.deleteProfilSortie(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
