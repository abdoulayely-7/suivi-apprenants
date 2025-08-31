import { PrismaClient, ProfilSortie } from "@prisma/client";
export declare class ProfilSortieService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllProfilSortie(): Promise<ProfilSortie[]>;
    createProfilSortie(data: Omit<ProfilSortie, "id">): Promise<ProfilSortie>;
    updateProfilSortie(id: number, data: Partial<ProfilSortie>): Promise<ProfilSortie>;
    deleteProfilSortie(id: number): Promise<void>;
    findProfilSortieById(id: number): Promise<ProfilSortie | null>;
}
//# sourceMappingURL=ProfilSortiService.d.ts.map