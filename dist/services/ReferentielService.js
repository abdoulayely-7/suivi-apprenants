export class ReferentielService {
    repo;
    constructor(repo) {
        this.repo = repo;
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
    async addCompetencesToReferentiel(referentielId, competenceIds) {
        return this.repo.addCompetencesToReferentiel(referentielId, competenceIds);
    }
}
//# sourceMappingURL=ReferentielService.js.map