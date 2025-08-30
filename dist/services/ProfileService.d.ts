import { PrismaClient, Profile } from "@prisma/client";
export declare class ProfileService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllProfiles(): Promise<Profile[]>;
    createProfile(data: Omit<Profile, "id">): Promise<Profile>;
    updateProfile(id: number, data: Partial<Profile>): Promise<Profile>;
    deleteProfile(id: number): Promise<void>;
    findProfileById(id: number): Promise<Profile | null>;
}
//# sourceMappingURL=ProfileService.d.ts.map