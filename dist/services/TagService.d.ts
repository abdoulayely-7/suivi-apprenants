import { PrismaClient, Tag } from "@prisma/client";
export declare class TagService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllTags(): Promise<Tag[]>;
    findTagById(id: number): Promise<Tag | null>;
    createTag(data: Omit<Tag, "id" | "briefTags">): Promise<Tag>;
    updateTag(id: number, data: Partial<Omit<Tag, "id" | "briefTags">>): Promise<Tag>;
    deleteTag(id: number): Promise<void>;
}
//# sourceMappingURL=TagService.d.ts.map