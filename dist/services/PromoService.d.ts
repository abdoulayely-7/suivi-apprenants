import { PrismaClient, Promo, User } from "@prisma/client";
export declare class PromoService {
    private repo;
    constructor(prisma: PrismaClient);
    getFormateurs(promoId: number): Promise<User[]>;
    getAllPromo(): Promise<Promo[]>;
    createPromo(data: Omit<Promo, "id">): Promise<Promo>;
    updatePromo(id: number, data: Partial<Promo>): Promise<Promo>;
    deletePromo(id: number): Promise<void>;
    findPromoById(id: number): Promise<Promo | null>;
}
//# sourceMappingURL=PromoService.d.ts.map