import { Promo, User } from "@prisma/client";
import { IPromoRepository } from "../repositories/interfaces/IPromoRepository.js";
import { IPromoService } from "./interfaces/IPromoService.js";
export declare class PromoService implements IPromoService {
    private repo;
    constructor(repo: IPromoRepository);
    getFormateurs(promoId: number): Promise<User[]>;
    getAllPromo(): Promise<Promo[]>;
    createPromo(data: Omit<Promo, "id">): Promise<Promo>;
    updatePromo(id: number, data: Partial<Promo>): Promise<Promo>;
    deletePromo(id: number): Promise<void>;
    findPromoById(id: number): Promise<Promo | null>;
}
//# sourceMappingURL=PromoService.d.ts.map