import { PrismaClient, Promo, User } from "@prisma/client";
import { IPromoRepository } from "./interfaces/IPromoRepository.js";
export declare class PromoRepository implements IPromoRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findFormateursByPromo(idPromo: number): Promise<User[]>;
    findAll(): Promise<Promo[]>;
    findById(id: number): Promise<Promo | null>;
    create(data: Omit<Promo, "id">): Promise<Promo>;
    update(id: number, data: Partial<Promo>): Promise<Promo>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=PromoRepository.d.ts.map