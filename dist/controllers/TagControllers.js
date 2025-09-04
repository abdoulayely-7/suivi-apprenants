import { CreateTagSchema, UpdateTagSchema } from "../validators/tagValidator.js";
export class TagController {
    tagService;
    constructor(tagService) {
        this.tagService = tagService;
    }
    async getAll(_req, res) {
        try {
            const tags = await this.tagService.getAllTags();
            res.json(tags);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const tag = await this.tagService.findTagById(id);
            if (!tag) {
                return res.status(404).json({ error: "Tag non trouvé" });
            }
            return res.json(tag);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateTagSchema.parse(req.body);
            const tag = await this.tagService.createTag(data);
            res.status(201).json(tag);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = UpdateTagSchema.parse(req.body);
            const tag = await this.tagService.updateTag(id, data);
            res.json(tag);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.tagService.deleteTag(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=TagControllers.js.map