export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.profile.findMany();
    }
    async findById(id) {
        return this.prisma.profile.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.profile.create({ data });
    }
    async update(id, data) {
        return this.prisma.profile.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.profile.delete({ where: { id } });
    }
}
//# sourceMappingURL=ProfileRepository.js.map