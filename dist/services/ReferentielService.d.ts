import { PrismaClient, Referentiel, Competence } from "@prisma/client";
export declare class ReferentielService {
    private repo;
    constructor(prisma: PrismaClient);
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