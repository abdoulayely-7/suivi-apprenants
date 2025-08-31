import { CompetenceRepository } from "../repositories/CompetenceRepository.js";
export class CompetenceService {
    repo;
    constructor(prisma) {
        this.repo = new CompetenceRepository(prisma);
    }
    async getAllCompetence() {
        return this.repo.findAll();
    }
    async createCompetence(data) {
        return this.repo.create(data);
    }
    async updateCompetence(id, data) {
        return this.repo.update(id, data);
    }
    async deleteComptence(id) {
        return this.repo.delete(id);
    }
    async findCompetenceById(id) {
        return this.repo.findById(id);
    }
}
//# sourceMappingURL=CompetenceService.js.map