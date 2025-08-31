export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany({
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        });
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        });
    }
    async create(data) {
        return this.prisma.user.create({ data });
    }
    async update(id, data) {
        return this.prisma.user.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.user.delete({ where: { id } });
    }
}
//# sourceMappingURL=UserRepository.js.map