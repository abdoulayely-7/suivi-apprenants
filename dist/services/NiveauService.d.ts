import { Niveau } from "@prisma/client";
import { INiveauRepository } from "../repositories/interfaces/INiveauRepository.js";
import { INiveauService } from "./interfaces/INiveauService.js";
export declare class NiveauService implements INiveauService {
    private repo;
    constructor(repo: INiveauRepository);
    getAllNiveau(): Promise<Niveau[]>;
    createNiveau(data: Omit<Niveau, "id">): Promise<Niveau>;
    updateNiveau(id: number, data: Partial<Niveau>): Promise<Niveau>;
    deleteNiveau(id: number): Promise<void>;
    findNiveauById(id: number): Promise<Niveau | null>;
}
//# sourceMappingURL=NiveauService.d.ts.map