import { PrismaClient, Profil } from "@prisma/client";
export declare class ProfileService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllProfiles(): Promise<Profil[]>;
    createProfile(data: Omit<Profil, "id">): Promise<Profil>;
    updateProfile(id: number, data: Partial<Profil>): Promise<Profil>;
    deleteProfile(id: number): Promise<void>;
    findProfileById(id: number): Promise<Profil | null>;
}
//# sourceMappingURL=ProfilService.d.ts.map