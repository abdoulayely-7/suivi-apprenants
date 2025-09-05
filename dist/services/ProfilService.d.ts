import { Profil } from "@prisma/client";
import { IProfilService } from "./interfaces/IProfilService.js";
import { ProfileRepository } from "../repositories/ProfileRepository.js";
export declare class ProfileService implements IProfilService {
    private repo;
    constructor(repo: ProfileRepository);
    getAllProfiles(): Promise<Profil[]>;
    createProfile(data: Omit<Profil, "id">): Promise<Profil>;
    updateProfile(id: number, data: Partial<Profil>): Promise<Profil>;
    deleteProfile(id: number): Promise<void>;
    findProfileById(id: number): Promise<Profil | null>;
}
//# sourceMappingURL=ProfilService.d.ts.map