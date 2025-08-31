import { PrismaClient } from "@prisma/client";
import { TagService } from "../services/TagService.js";
import { CreateTagSchema, UpdateTagSchema } from "../validators/tagValidator.js";
const prisma = new PrismaClient();
const service = new TagService(prisma);
export class TagController {
    static async getAll(_req, res) {
        try {
            const tags = await service.getAllTags();
            res.json(tags);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const tag = await service.findTagById(id);
            if (!tag) {
                return res.status(404).json({ error: "Tag non trouvé" });
            }
            return res.json(tag);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async create(req, res) {
        try {
            const data = CreateTagSchema.parse(req.body);
            const tag = await service.createTag(data);
            res.status(201).json(tag);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = UpdateTagSchema.parse(req.body);
            const tag = await service.updateTag(id, data);
            res.json(tag);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.deleteTag(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=TagControllers.js.map