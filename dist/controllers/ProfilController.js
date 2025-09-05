import { CreateProfileSchema } from "../validators/profilValidator.js";
import { StatusCodes } from "../validators/statusCodes.js";
export class ProfileController {
    profilService;
    constructor(profilService) {
        this.profilService = profilService;
        //
    }
    async getAll(_req, res) {
        const profiles = await this.profilService.getAllProfiles();
        res.json(profiles);
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const profile = await this.profilService.findProfileById(id);
            if (!profile) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Profil non trouvé" });
            }
            return res.json(profile);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateProfileSchema.parse(req.body);
            const profile = await this.profilService.createProfile(data);
            res.status(201).json(profile);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const profile = await this.profilService.updateProfile(id, data);
            res.json(profile);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.profilService.deleteProfile(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=ProfilController.js.map