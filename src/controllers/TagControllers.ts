import { Request, Response } from "express";
import { PrismaClient, Tag } from "@prisma/client";
import { TagService } from "../services/TagService.js";
import { CreateTagSchema, UpdateTagSchema } from "../validators/tagValidator.js";

const prisma = new PrismaClient();
const service = new TagService(prisma);

export class TagController {
    static async getAll(_req: Request, res: Response) {
        try {
            const tags = await service.getAllTags();
            res.json(tags);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const tag = await service.findTagById(id);
            if (!tag) {
                return res.status(404).json({ error: "Tag non trouvé" });
            }
            return res.json(tag);
        } catch (error: any) {
           return res.status(400).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = CreateTagSchema.parse(req.body) as Omit<Tag, "id">;
            const tag = await service.createTag(data);
            res.status(201).json(tag);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const data = UpdateTagSchema.parse(req.body) as Partial<Omit<Tag, "id">>;
            const tag = await service.updateTag(id, data);
            res.json(tag);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await service.deleteTag(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
