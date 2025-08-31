import { PrismaClient, Competence } from "@prisma/client";
export declare class CompetenceService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllCompetences(): Promise<Competence[]>;
    findCompetenceById(id: number): Promise<Competence | null>;
    createCompetence(data: Omit<Competence, "id">): Promise<Competence>;
    updateCompetence(id: number, data: Partial<Competence>): Promise<Competence>;
    deleteCompetence(id: number): Promise<void>;
    getNiveauxForCompetence(id: number): Promise<({
        competence: {
            id: number;
            name: string;
        };
        niveau: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        competenceId: number;
        userId: number;
        niveauId: number;
    })[]>;
}
//# sourceMappingURL=CompetenceService.d.ts.map