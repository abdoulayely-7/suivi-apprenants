export class PromoService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getFormateurs(promoId) {
        return this.repo.findFormateursByPromo(promoId);
    }
    async getAllPromo() {
        return this.repo.findAll();
    }
    async createPromo(data) {
        return this.repo.create(data);
    }
    async updatePromo(id, data) {
        return this.repo.update(id, data);
    }
    async deletePromo(id) {
        return this.repo.delete(id);
    }
    async findPromoById(id) {
        return this.repo.findById(id);
    }
}
//# sourceMappingURL=PromoService.js.map