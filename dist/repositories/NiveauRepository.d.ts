import { PrismaClient, Niveau } from "@prisma/client";
import { IRepository } from "./IRepository.js";
export declare class NiveauRepository implements IRepository<Niveau> {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Niveau[]>;
    findById(id: number): Promise<Niveau | null>;
    create(data: Omit<Niveau, "id">): Promise<Niveau>;
    update(id: number, data: Partial<Niveau>): Promise<Niveau>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=NiveauRepository.d.ts.map