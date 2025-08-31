import { PrismaClient, Referentiel, Competence } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class ReferentielRepository implements IRepository<Referentiel> {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async findAll(): Promise<Referentiel[]> {
        return this.prisma.referentiel.findMany();
    }

    async findById(id: number): Promise<Referentiel | null> {
        return this.prisma.referentiel.findUnique({ where: { id } });
    }

    async create(data: Omit<Referentiel, "id">): Promise<Referentiel> {
        return this.prisma.referentiel.create({ data });
    }

    async update(id: number, data: Partial<Referentiel>): Promise<Referentiel> {
        return this.prisma.referentiel.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.referentiel.delete({ where: { id } });
    }

    async getCompetencesByReferentielId(referentielId: number): Promise<Competence[]> {
        const result = await this.prisma.referentiel.findUnique({
            where: { id: referentielId },
            include: {
                refCompetences: {
                    include: {
                        competence: true
                    }
                }
            }
        });
        
        return result?.refCompetences.map(rc => rc.competence) || [];
    }

    async addCompetenceToReferentiel(referentielId: number, competenceId: number): Promise<void> {
        await this.prisma.refCompetence.create({
            data: {
                referentielId,
                competenceId
            }
        });
    }
}
