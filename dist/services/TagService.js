export class TagService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getAllTags() {
        return this.repo.findAll();
    }
    async findTagById(id) {
        return this.repo.findById(id);
    }
    async createTag(data) {
        return this.repo.create(data);
    }
    async updateTag(id, data) {
        return this.repo.update(id, data);
    }
    async deleteTag(id) {
        await this.repo.delete(id);
    }
}
//# sourceMappingURL=TagService.js.map