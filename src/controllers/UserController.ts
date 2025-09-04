import { Request, Response } from "express";
import { User } from "@prisma/client";
import { IUserService } from "../services/interfaces/IUserService.js";
import { CreateUserSchema, UpdateUserSchema } from "../validators/userValidator.js";

export class UserController {
    constructor(private userService: IUserService) {}

    async getAll(_req: Request, res: Response) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const user = await this.userService.findUserById(id);
            if (!user) {
                return res.status(404).json({ error: "Utilisateur non trouvé" });
            }
            return res.json(user);
        } catch (error: any) {
           return res.status(400).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = CreateUserSchema.parse(req.body) as Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">;
            const user = await this.userService.createUser(data);
            res.status(201).json(user);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const data = UpdateUserSchema.parse(req.body) as Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>;
            const user = await this.userService.updateUser(id, data);
            res.json(user);
        } catch (error: any) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            await this.userService.deleteUser(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
