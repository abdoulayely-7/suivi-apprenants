export class ProfilSortieService {
    repo;
    constructor(repo) {
        this.repo = repo;
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