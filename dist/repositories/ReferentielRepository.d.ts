import { PrismaClient, Referentiel, Competence } from "@prisma/client";
import { IRepository } from "./IRepository.js";
export declare class ReferentielRepository implements IRepository<Referentiel> {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<any[]>;
    findById(id: number): Promise<Referentiel | null>;
    create(data: Omit<Referentiel, "id">): Promise<Referentiel>;
    update(id: number, data: Partial<Referentiel>): Promise<Referentiel>;
    delete(id: number): Promise<void>;
    getCompetencesByReferentielId(referentielId: number): Promise<Competence[]>;
    addCompetenceToReferentiel(referentielId: number, competenceId: number): Promise<void>;
    addCompetencesToReferentiel(referentielId: number, competenceIds: number[]): Promise<void>;
}
//# sourceMappingURL=ReferentielRepository.d.ts.map