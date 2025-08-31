export class NiveauRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.niveau.findMany();
    }
    async findById(id) {
        return this.prisma.niveau.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.niveau.create({ data });
    }
    async update(id, data) {
        return this.prisma.niveau.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.userCompetence.deleteMany({
            where: { niveauId: id },
        });
        await this.prisma.niveau.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=NiveauRepository.js.map