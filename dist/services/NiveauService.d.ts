import { PrismaClient, Niveau } from "@prisma/client";
export declare class NiveauService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllNiveau(): Promise<Niveau[]>;
    createNiveau(data: Omit<Niveau, "id">): Promise<Niveau>;
    updateNiveau(id: number, data: Partial<Niveau>): Promise<Niveau>;
    deleteNiveau(id: number): Promise<void>;
    findNiveauById(id: number): Promise<Niveau | null>;
}
//# sourceMappingURL=NiveauService.d.ts.map