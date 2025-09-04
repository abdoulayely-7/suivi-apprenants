import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/IUserRepository.js";
import { UserWithRelations } from "../types/UserWithRelations.js";
import { IUserService } from "./interfaces/IUserService.js";


export class UserService implements IUserService {
    private repo: IUserRepository;

    constructor(repo: IUserRepository) {
        this.repo = repo;
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

    //  async findByEmail(email: string): Promise<User | null> {
    //     return this.repo.findByEmail(email);
    // }

    // async verifyPassword(user: User, password: string): Promise<boolean> {
    //     return bcrypt.compare(password, user.password);
    // }

     async findByEmail(email: string): Promise<UserWithRelations | null> {
        return this.repo.findByEmail(email);
    }

    async findById(id: number): Promise<UserWithRelations | null> {
        return this.repo.findById(id) as Promise<UserWithRelations | null>;
    }

    async verifyPassword(user: User, password: string): Promise<boolean> {
        return this.repo.verifyPassword(user, password);
    }
}
