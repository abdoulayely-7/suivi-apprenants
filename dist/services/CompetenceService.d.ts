import { Competence } from "@prisma/client";
import { ICompetenceRepository } from "../repositories/interfaces.js";
import { ICompetenceService } from "./interfaces/ICompetenceService.js";
export declare class CompetenceService implements ICompetenceService {
    private repo;
    constructor(repo: ICompetenceRepository);
    getAllCompetences(): Promise<Competence[]>;
    findCompetenceById(id: number): Promise<Competence | null>;
    createCompetence(data: Omit<Competence, "id">): Promise<Competence>;
    updateCompetence(id: number, data: Partial<Competence>): Promise<Competence>;
    deleteCompetence(id: number): Promise<void>;
    getNiveauxForCompetence(id: number): Promise<any[]>;
}
//# sourceMappingURL=CompetenceService.d.ts.map