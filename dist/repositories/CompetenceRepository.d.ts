import { PrismaClient, Competence } from "@prisma/client";
import { IRepository } from "./IRepository.js";
export declare class CompetenceRepository implements IRepository<Competence> {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Competence[]>;
    findById(id: number): Promise<Competence | null>;
    create(data: Omit<Competence, "id">): Promise<Competence>;
    update(id: number, data: Partial<Competence>): Promise<Competence>;
    delete(id: number): Promise<void>;
    findNiveauxByCompetence(id: number): Promise<({
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
//# sourceMappingURL=CompetenceRepository.d.ts.map