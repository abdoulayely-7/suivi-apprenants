import { PrismaClient, Referentiel, Competence } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class ReferentielRepository implements IRepository<Referentiel> {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async findAll(): Promise<any[]> {
        const referentiels = await this.prisma.referentiel.findMany({
            include: {
                refCompetences: {
                    include: {
                        competence: true
                    }
                }
            }
        });

        return referentiels.map(ref => ({
            id: ref.id,
            name: ref.name,
            competences: ref.refCompetences.map(rc => ({
                id: rc.competence.id,
                name: rc.competence.name
            }))
        }));
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
        const usersCount = await this.prisma.refUser.count({
            where: { referentielId: id }
        });

        if (usersCount > 0) {
            throw new Error("Impossible de supprimer ce référentiel car il est associé à des utilisateurs");
        }

        await this.prisma.$transaction([
            this.prisma.refCompetence.deleteMany({ where: { referentielId: id } }),
            this.prisma.promoRef.deleteMany({ where: { referentielId: id } }),
            this.prisma.referentiel.delete({ where: { id } })
        ]);
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

    async addCompetencesToReferentiel(referentielId: number, competenceIds: number[]): Promise<void> {
        const data = competenceIds.map(competenceId => ({
            referentielId,
            competenceId
        }));

        await this.prisma.refCompetence.createMany({
            data,
            skipDuplicates: true
        });
    }
}
