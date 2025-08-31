export class ReferentielRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.referentiel.findMany();
    }
    async findById(id) {
        return this.prisma.referentiel.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.referentiel.create({ data });
    }
    async update(id, data) {
        return this.prisma.referentiel.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.$transaction([
            this.prisma.refCompetence.deleteMany({ where: { referentielId: id } }),
            this.prisma.promoRef.deleteMany({ where: { referentielId: id } }),
            this.prisma.refUser.deleteMany({ where: { referentielId: id } }),
            this.prisma.referentiel.delete({ where: { id } })
        ]);
    }
    async getCompetencesByReferentielId(referentielId) {
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
    async addCompetenceToReferentiel(referentielId, competenceId) {
        await this.prisma.refCompetence.create({
            data: {
                referentielId,
                competenceId
            }
        });
    }
}
//# sourceMappingURL=ReferentielRepository.js.map