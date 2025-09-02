import { PrismaClient, User } from "@prisma/client";
import { UserWithRelations } from "../repositories/UserRepository.js";
export declare class UserService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User | null>;
    createUser(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User>;
    updateUser(id: number, data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>): Promise<User>;
    deleteUser(id: number): Promise<void>;
    findByEmail(email: string): Promise<UserWithRelations | null>;
    findById(id: number): Promise<UserWithRelations | null>;
    verifyPassword(user: UserWithRelations, password: string): Promise<boolean>;
}
//# sourceMappingURL=UserService.d.ts.map