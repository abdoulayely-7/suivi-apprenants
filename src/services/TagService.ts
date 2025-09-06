import { Tag } from "@prisma/client";
import { ITagRepository } from "../repositories/interfaces/ITagRepository.js";
import { ITagService } from "./interfaces/ITagService.js";

export class TagService implements ITagService {
    private repo: ITagRepository;

    constructor(repo: ITagRepository) {
        this.repo = repo;
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
