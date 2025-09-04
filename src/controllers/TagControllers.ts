import { Request, Response } from "express";
import { Tag } from "@prisma/client";
import { ITagService } from "../services/interfaces/ITagService.js";
import { CreateTagSchema, UpdateTagSchema } from "../validators/tagValidator.js";

export class TagController {
    constructor(private tagService: ITagService) {}

    async getAll(_req: Request, res: Response) {
        try {
            const tags = await this.tagService.getAllTags();
            res.json(tags);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const tag = await this.tagService.findTagById(id);
            if (!tag) {
                return res.status(404).json({ error: "Tag non trouvé" });
            }
            return res.json(tag);
        } catch (error: any) {
           return res.status(400).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = CreateTagSchema.parse(req.body) as Omit<Tag, "id">;
            const tag = await this.tagService.createTag(data);
            res.status(201).json(tag);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const data = UpdateTagSchema.parse(req.body) as Partial<Omit<Tag, "id">>;
            const tag = await this.tagService.updateTag(id, data);
            res.json(tag);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await this.tagService.deleteTag(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
