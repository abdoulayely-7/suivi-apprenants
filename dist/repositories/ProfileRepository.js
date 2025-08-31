export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.profil.findMany();
    }
    async findById(id) {
        return this.prisma.profil.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.profil.create({ data });
    }
    async update(id, data) {
        return this.prisma.profil.update({ where: { id }, data: { ...data } });
    }
    async delete(id) {
        await this.prisma.profil.delete({ where: { id } });
    }
}
//# sourceMappingURL=ProfileRepository.js.map