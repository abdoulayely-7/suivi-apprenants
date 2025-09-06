import { PrismaClient, Profil } from "@prisma/client";
import { IProfilRepository } from "./interfaces/IProfilRepository.js";
export declare class ProfileRepository implements IProfilRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Profil[]>;
    findById(id: number): Promise<Profil | null>;
    create(data: Omit<Profil, "id">): Promise<Profil>;
    update(id: number, data: Partial<Profil>): Promise<Profil>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=ProfileRepository.d.ts.map