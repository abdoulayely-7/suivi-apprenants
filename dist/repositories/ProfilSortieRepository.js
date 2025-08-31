export class ProfilSortieRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.profilSortie.findMany();
    }
    async findById(id) {
        return this.prisma.profilSortie.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.profilSortie.create({ data });
    }
    async update(id, data) {
        return this.prisma.profilSortie.update({ where: { id }, data: { ...data } });
    }
    async delete(id) {
        await this.prisma.profilSortie.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=ProfilSortieRepository.js.map