import { PrismaClient, Profile } from "@prisma/client";
import { IRepository } from "./IRepository.js";
export declare class ProfileRepository implements IRepository<Profile> {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Profile[]>;
    findById(id: number): Promise<Profile | null>;
    create(data: Omit<Profile, "id">): Promise<Profile>;
    update(id: number, data: Partial<Profile>): Promise<Profile>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=ProfileRepository.d.ts.map