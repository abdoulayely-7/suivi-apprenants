import bcrypt from "bcrypt";
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
        await this.prisma.$transaction([
            this.prisma.promoUser.deleteMany({ where: { userId: id } }),
            this.prisma.refUser.deleteMany({ where: { userId: id } }),
            this.prisma.userCompetence.deleteMany({ where: { userId: id } }),
            this.prisma.user.delete({ where: { id } }),
        ]);
    }
    // async findByEmail(email: string): Promise<User | null> {
    //         return this.prisma.user.findUnique({
    //             where: { email },
    //             include: {
    //                 profil: true,
    //                 profilSortie: true,
    //                 promoUsers: { include: { promo: true } },
    //                 RefUser: { include: { referentiel: true } },
    //                 userCompetences: { include: { competence: true, niveau: true } },
    //             },
    //         });
    //     }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        });
        ;
    }
    async verifyPassword(user, password) {
        return bcrypt.compare(password, user.password);
    }
}
//# sourceMappingURL=UserRepository.js.map