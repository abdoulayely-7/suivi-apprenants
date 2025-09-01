import { TagRepository } from "../repositories/TagRepository.js";
export class TagService {
    repo;
    constructor(prisma) {
        this.repo = new TagRepository(prisma);
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