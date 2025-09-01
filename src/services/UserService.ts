import { PrismaClient, User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository.js";

export class UserService {
    private repo: UserRepository;

    constructor(prisma: PrismaClient) {
        this.repo = new UserRepository(prisma);
    }

    async getAllUsers(): Promise<User[]> {
        return this.repo.findAll();
    }

    async findUserById(id: number): Promise<User | null> {
        return this.repo.findById(id);
    }

    async createUser(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User> {
        return this.repo.create(data);
    }

    async updateUser(
        id: number,
        data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>
    ): Promise<User> {
        return this.repo.update(id, data);
    }

    async deleteUser(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}
