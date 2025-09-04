import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/IUserRepository.js";
import { UserWithRelations } from "../types/UserWithRelations.js";
import { IUserService } from "./interfaces/IUserService.js";
export declare class UserService implements IUserService {
    private repo;
    constructor(repo: IUserRepository);
    getAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User | null>;
    createUser(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User>;
    updateUser(id: number, data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>): Promise<User>;
    deleteUser(id: number): Promise<void>;
    findByEmail(email: string): Promise<UserWithRelations | null>;
    findById(id: number): Promise<UserWithRelations | null>;
    verifyPassword(user: User, password: string): Promise<boolean>;
}
//# sourceMappingURL=UserService.d.ts.map