import { Tag } from "@prisma/client";
import { ITagRepository } from "../repositories/interfaces/ITagRepository.js";
import { ITagService } from "./interfaces/ITagService.js";
export declare class TagService implements ITagService {
    private repo;
    constructor(repo: ITagRepository);
    getAllTags(): Promise<Tag[]>;
    findTagById(id: number): Promise<Tag | null>;
    createTag(data: Omit<Tag, "id" | "briefTags">): Promise<Tag>;
    updateTag(id: number, data: Partial<Omit<Tag, "id" | "briefTags">>): Promise<Tag>;
    deleteTag(id: number): Promise<void>;
}
//# sourceMappingURL=TagService.d.ts.map