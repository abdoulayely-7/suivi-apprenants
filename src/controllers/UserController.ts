import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { UserService } from "../services/UserService.js";
import { CreateUserSchema, UpdateUserSchema } from "../validators/userValidator.js";

const prisma = new PrismaClient();
const service = new UserService(prisma);

export class UserController {
    static async getAll(_req: Request, res: Response) {
        try {
            const users = await service.getAllUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const user = await service.findUserById(id);
            if (!user) {
                return res.status(404).json({ error: "Utilisateur non trouvé" });
            }
            return res.json(user);
        } catch (error: any) {
           return res.status(400).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const data = CreateUserSchema.parse(req.body) as Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">;
            const user = await service.createUser(data);
            res.status(201).json(user);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const data = UpdateUserSchema.parse(req.body) as Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>;
            const user = await service.updateUser(id, data);
            res.json(user);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await service.deleteUser(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
