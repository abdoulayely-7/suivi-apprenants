import {PrismaClient, Promo, User} from "@prisma/client";
import { PromoRepository } from "../repositories/PromoRepository.js";

export class PromoService {
    private repo: PromoRepository;

    constructor(prisma: PrismaClient) {
        this.repo = new PromoRepository(prisma);
    }

    async getFormateurs(promoId: number): Promise<User[]> {
        return this.repo.findFormateursByPromo(promoId);
    }
    async getAllPromo(): Promise<Promo[]> {
        return this.repo.findAll();
    }

    async createPromo(data: Omit<Promo, "id">): Promise<Promo> {
        return this.repo.create(data);
    }

    async updatePromo(id: number, data: Partial<Promo>): Promise<Promo> {
        return this.repo.update(id, data);
    }

    async deletePromo(id: number): Promise<void> {
        return this.repo.delete(id);
    }

    async findPromoById(id: number): Promise<Promo | null> {
        return this.repo.findById(id);
    }
}
