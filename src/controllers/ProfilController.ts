import { Request, Response } from "express";
import { IProfilService } from "../services/interfaces/IProfilService.js";
import {CreateProfileSchema} from "../validators/profilValidator.js";

export class ProfileController {
    constructor(private profilService: IProfilService) {
       //
    }

    async getAll(_req: Request, res: Response) {
        const profiles = await this.profilService.getAllProfiles();
        res.json(profiles);
    }
    async findById(req: Request, res: Response) {
    try {
    const id: number = Number(req.params.id);
    const profile = await this.profilService.findProfileById(id);
    if (!profile) {
    return res.status(404).json({ error: "Profil non trouvé" });
    }
    return res.json(profile);
    } catch (error: any) {
    return  res.status(400).json({ error: error.message });
    }
    }

    async create(req: Request, res: Response) {
    try {
    const data = CreateProfileSchema.parse(req.body);
    const profile = await this.profilService.createProfile(data);
    res.status(201).json(profile);
    } catch (error: any) {
    const errors = error.errors ?? [{ message: error.message }];
    res.status(400).json({errors});
    }
    }

    async update(req: Request, res: Response) {
    try {
    const id: number = Number(req.params.id);
    const data  = req.body;
    const profile = await this.profilService.updateProfile(id, data);
    res.json(profile);
    } catch (error: any) {
    res.status(400).json({ error: error.message });
    }
    }

    async delete(req: Request, res: Response) {
    try {
    const id: number = Number(req.params.id);

    await this.profilService.deleteProfile(id);
    res.status(204).send();
    } catch (error: any) {
    res.status(400).json({ error: error.message });
    }
    }
}