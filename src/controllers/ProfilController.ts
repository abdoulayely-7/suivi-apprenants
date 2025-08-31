import { Request, Response } from "express";
import { ProfileService } from "../services/ProfilService.js";
import { PrismaClient } from "@prisma/client";
import {CreateProfileSchema} from "../validators/profilValidator.js";

const prisma = new PrismaClient();
const service = new ProfileService(prisma);

export class ProfileController {
    static async getAll(_req: Request, res: Response) {
        const profiles = await service.getAllProfiles();
        res.json(profiles);
    }
    static async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const profile = await service.findProfileById(id);
            if (!profile) {
                return res.status(404).json({ error: "Profil non trouvé" });
            }
            return res.json(profile);
        } catch (error: any) {
            return  res.status(400).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = CreateProfileSchema.parse(req.body);
            const profile = await service.createProfile(data);
            res.status(201).json(profile);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({errors});
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const data  = req.body;
            const profile = await service.updateProfile(id, data);
            res.json(profile);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);

            await service.deleteProfile(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}