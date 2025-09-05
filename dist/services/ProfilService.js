export class ProfileService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getAllProfiles() {
        return this.repo.findAll();
    }
    async createProfile(data) {
        return this.repo.create(data);
    }
    async updateProfile(id, data) {
        return this.repo.update(id, data);
    }
    async deleteProfile(id) {
        return this.repo.delete(id);
    }
    async findProfileById(id) {
        return this.repo.findById(id);
    }
}
//# sourceMappingURL=ProfilService.js.map