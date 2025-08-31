import { ProfileService } from "../services/ProfileService.js";
import { PrismaClient } from "@prisma/client";
import { CreateProfileSchema } from "../validators/profileValidator.js";
const prisma = new PrismaClient();
const service = new ProfileService(prisma);
export class ProfileController {
    static async getAll(_req, res) {
        const profiles = await service.getAllProfiles();
        res.json(profiles);
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const profile = await service.findProfileById(id);
            if (!profile) {
                return res.status(404).json({ error: "Profil non trouvé" });
            }
            return res.json(profile);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreateProfileSchema.parse(req.body);
            const profile = await service.createProfile(data);
            res.status(201).json(profile);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const profile = await service.updateProfile(id, data);
            res.json(profile);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deleteProfile(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=ProfileController.js.map