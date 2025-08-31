import { NiveauRepository } from "../repositories/NiveauRepository.js";
export class NiveauService {
    repo;
    constructor(prisma) {
        this.repo = new NiveauRepository(prisma);
    }
    async getAllNiveau() {
        return this.repo.findAll();
    }
    async createNiveau(data) {
        return this.repo.create(data);
    }
    async updateNiveau(id, data) {
        return this.repo.update(id, data);
    }
    async deleteNiveau(id) {
        return this.repo.delete(id);
    }
    async findNiveauById(id) {
        return this.repo.findById(id);
    }
}
//# sourceMappingURL=NiveauService.js.map