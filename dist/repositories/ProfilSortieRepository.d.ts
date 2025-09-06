import { PrismaClient, ProfilSortie } from "@prisma/client";
import { IProfilSortieRepository } from "./interfaces/IProfilSortieRepository.js";
export declare class ProfilSortieRepository implements IProfilSortieRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<ProfilSortie[]>;
    findById(id: number): Promise<ProfilSortie | null>;
    create(data: Omit<ProfilSortie, "id">): Promise<ProfilSortie>;
    update(id: number, data: Partial<ProfilSortie>): Promise<ProfilSortie>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=ProfilSortieRepository.d.ts.map