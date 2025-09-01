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
            name: string;
            id: number;
        };
        niveau: {
            name: string;
            id: number;
        };
    } & {
        id: number;
        userId: number;
        competenceId: number;
        niveauId: number;
    })[]>;
}
//# sourceMappingURL=CompetenceService.d.ts.map