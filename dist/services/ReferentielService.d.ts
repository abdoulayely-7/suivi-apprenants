import { Referentiel, Competence } from "@prisma/client";
import { IReferentielRepository } from "../repositories/interfaces/IReferentielRepository.js";
import { IReferentielService } from "./interfaces/IReferentielService.js";
export declare class ReferentielService implements IReferentielService {
    private repo;
    constructor(repo: IReferentielRepository);
    getAllReferentiels(): Promise<any[]>;
    createReferentiel(data: Omit<Referentiel, "id">): Promise<Referentiel>;
    updateReferentiel(id: number, data: Partial<Referentiel>): Promise<Referentiel>;
    deleteReferentiel(id: number): Promise<void>;
    findReferentielById(id: number): Promise<Referentiel | null>;
    getCompetencesByReferentielId(referentielId: number): Promise<Competence[]>;
    addCompetenceToReferentiel(referentielId: number, competenceId: number): Promise<void>;
    addCompetencesToReferentiel(referentielId: number, competenceIds: number[]): Promise<void>;
}
//# sourceMappingURL=ReferentielService.d.ts.map