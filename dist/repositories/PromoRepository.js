export class PromoRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findFormateursByPromo(idPromo) {
        return this.prisma.user.findMany({
            where: {
                promoUsers: {
                    some: { promoId: idPromo }
                },
                profil: { name: "Formateur" }
            },
            include: {
                profil: true,
                promoUsers: {
                    include: { promo: true }
                }
            }
        });
    }
    async findAll() {
        return this.prisma.promo.findMany();
    }
    async findById(id) {
        return this.prisma.promo.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.promo.create({ data });
    }
    async update(id, data) {
        return this.prisma.promo.update({ where: { id }, data: { ...data } });
    }
    async delete(id) {
        await this.prisma.promo.delete({ where: { id } });
    }
}
//# sourceMappingURL=PromoRepository.js.map