export class CompetenceRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.competence.findMany();
    }
    async findById(id) {
        return this.prisma.competence.findUnique({
            where: { id },
        });
    }
    async create(data) {
        return this.prisma.competence.create({ data });
    }
    async update(id, data) {
        return this.prisma.competence.update({
            where: { id },
            data,
        });
    }
    //   async delete(id: number): Promise<void> {
    //     await this.prisma.competence.delete({ where: { id } });
    //   }
    // async delete(id: number): Promise<void> {
    // await this.prisma.userCompetence.deleteMany({
    //     where: { competenceId: id },
    // });
    // await this.prisma.competence.delete({
    //     where: { id },
    // });
    // }
    // async delete(id: number): Promise<void> {
    // const used = await this.prisma.userCompetence.count({
    //     where: { competenceId: id },
    // });
    // if (used > 0) {
    //     throw new Error("Impossible de supprimer : compétence encore utilisée par des utilisateurs.");
    // }
    // await this.prisma.competence.delete({ where: { id } });
    // }
    async delete(id) {
        const usedInUser = await this.prisma.userCompetence.count({
            where: { competenceId: id },
        });
        const usedInRef = await this.prisma.refCompetence.count({
            where: { competenceId: id },
        });
        if (usedInUser > 0 || usedInRef > 0) {
            throw new Error("Impossible de supprimer : compétence encore utilisée.");
        }
        await this.prisma.competence.delete({ where: { id } });
    }
    async findNiveauxByCompetence(id) {
        return this.prisma.userCompetence.findMany({
            where: { competenceId: id },
            include: { niveau: true },
        });
    }
}
//# sourceMappingURL=CompetenceRepository.js.map