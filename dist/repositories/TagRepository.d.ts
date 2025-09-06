import { PrismaClient, Tag } from "@prisma/client";
import { ITagRepository } from "./interfaces/ITagRepository.js";
export declare class TagRepository implements ITagRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<Tag[]>;
    findById(id: number): Promise<Tag | null>;
    create(data: Omit<Tag, "id">): Promise<Tag>;
    update(id: number, data: Partial<Tag>): Promise<Tag>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=TagRepository.d.ts.map