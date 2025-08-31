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
        const promoUsers = await this.prisma.promoUser.count({
            where: { promoId: id }
        });
        const promoRefs = await this.prisma.promoRef.count({
            where: { promoId: id }
        });
        if (promoUsers > 0) {
            throw new Error("Impossible de supprimer la promo : des utilisateurs y sont encore rattachés");
        }
        if (promoRefs > 0) {
            throw new Error("Impossible de supprimer la promo : des référentiels y sont encore rattachés");
        }
        await this.prisma.promo.delete({ where: { id } });
    }
}
//# sourceMappingURL=PromoRepository.js.map