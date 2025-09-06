import { PrismaClient, Competence } from "@prisma/client";
import { ICompetenceRepository } from "./interfaces/ICompetenceRepository.js";
export declare class CompetenceRepository implements ICompetenceRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Competence[]>;
    findById(id: number): Promise<Competence | null>;
    create(data: Omit<Competence, "id">): Promise<Competence>;
    update(id: number, data: Partial<Competence>): Promise<Competence>;
    delete(id: number): Promise<void>;
    findNiveauxByCompetence(id: number): Promise<({
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
        userId: number;
        competenceId: number;
        niveauId: number;
    })[]>;
}
//# sourceMappingURL=CompetenceRepository.d.ts.map