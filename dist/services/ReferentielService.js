import { ReferentielRepository } from "../repositories/ReferentielRepository.js";
export class ReferentielService {
    repo;
    constructor(prisma) {
        this.repo = new ReferentielRepository(prisma);
    }
    async getAllReferentiels() {
        return this.repo.findAll();
    }
    async createReferentiel(data) {
        return this.repo.create(data);
    }
    async updateReferentiel(id, data) {
        return this.repo.update(id, data);
    }
    async deleteReferentiel(id) {
        return this.repo.delete(id);
    }
    async findReferentielById(id) {
        return this.repo.findById(id);
    }
    async getCompetencesByReferentielId(referentielId) {
        return this.repo.getCompetencesByReferentielId(referentielId);
    }
    async addCompetenceToReferentiel(referentielId, competenceId) {
        return this.repo.addCompetenceToReferentiel(referentielId, competenceId);
    }
}
//# sourceMappingURL=ReferentielService.js.map