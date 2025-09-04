export class CompetenceService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getAllCompetences() {
        return this.repo.findAll();
    }
    async findCompetenceById(id) {
        return this.repo.findById(id);
    }
    async createCompetence(data) {
        return this.repo.create(data);
    }
    async updateCompetence(id, data) {
        return this.repo.update(id, data);
    }
    async deleteCompetence(id) {
        return this.repo.delete(id);
    }
    async getNiveauxForCompetence(id) {
        return this.repo.findNiveauxByCompetence(id);
    }
}
//# sourceMappingURL=CompetenceService.js.map