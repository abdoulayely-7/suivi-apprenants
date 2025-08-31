import { PrismaClient, Competence } from "@prisma/client";
export declare class CompetenceService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllCompetence(): Promise<Competence[]>;
    createCompetence(data: Omit<Competence, "id">): Promise<Competence>;
    updateCompetence(id: number, data: Partial<Competence>): Promise<Competence>;
    deleteComptence(id: number): Promise<void>;
    findCompetenceById(id: number): Promise<Competence | null>;
}
//# sourceMappingURL=CompetenceService.d.ts.map