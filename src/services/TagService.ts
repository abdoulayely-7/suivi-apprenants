import { PrismaClient, Tag } from "@prisma/client";
import { TagRepository } from "../repositories/TagRepository.js";

export class TagService {
    private repo: TagRepository;

    constructor(prisma: PrismaClient) {
        this.repo = new TagRepository(prisma);
    }

    async getAllTags(): Promise<Tag[]> {
        return this.repo.findAll();
    }

    async findTagById(id: number): Promise<Tag | null> {
        return this.repo.findById(id);
    }

    async createTag(data: Omit<Tag, "id" | "briefTags">): Promise<Tag> {
        return this.repo.create(data);
    }

    async updateTag(
        id: number,
        data: Partial<Omit<Tag, "id" | "briefTags">>
    ): Promise<Tag> {
        return this.repo.update(id, data);
    }

    async deleteTag(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}
