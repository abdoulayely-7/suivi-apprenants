export class CompetenceRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.competence.findMany();
    }
    async findById(id) {
        return this.prisma.competence.findUnique({ where: { id } });
    }
    ;
    async create(data) {
        return this.prisma.competence.create({ data });
    }
    ;
    async update(id, data) {
        return this.prisma.competence.update({ where: { id }, data });
    }
    ;
    async delete(id) {
        await this.prisma.competence.delete({ where: { id } });
    }
    ;
}
//# sourceMappingURL=CompetenceRepository.js.map