import {PrismaClient, Promo, User} from "@prisma/client";
import { IPromoRepository } from "./interfaces/IPromoRepository.js";

export class PromoRepository implements IPromoRepository {
    constructor(private prisma: PrismaClient) {}

    async findFormateursByPromo(idPromo: number): Promise<User[]> {
        return this.prisma.user.findMany({
            where: {
                promoUsers: {
                    some: { promoId : idPromo }
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
    async findAll(): Promise<Promo[]> {
        return this.prisma.promo.findMany();
    }

    async findById(id: number): Promise<Promo | null> {
        return this.prisma.promo.findUnique({ where: { id } });
    }

    async create(data: Omit<Promo, "id">): Promise<Promo> {
        return this.prisma.promo.create({ data });
    }

    async update(id: number, data: Partial<Promo>): Promise<Promo> {
        return this.prisma.promo.update({ where: { id }, data:{...data} });
    }

    async delete(id: number): Promise<void> {
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
