import { ProfilSortieRepository } from "../repositories/ProfilSortieRepository.js";
export class ProfilSortieService {
    repo;
    constructor(prisma) {
        this.repo = new ProfilSortieRepository(prisma);
    }
    async getAllProfilSortie() {
        return this.repo.findAll();
    }
    async createProfilSortie(data) {
        return this.repo.create(data);
    }
    async updateProfilSortie(id, data) {
        return this.repo.update(id, data);
    }
    async deleteProfilSortie(id) {
        return this.repo.delete(id);
    }
    async findProfilSortieById(id) {
        return this.repo.findById(id);
    }
}
//# sourceMappingURL=ProfilSortiService.js.map