import { PrismaClient, User } from "@prisma/client";
import { IRepository } from "./IRepository.js";
export declare class UserRepository implements IRepository<User> {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User>;
    update(id: number, data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>): Promise<User>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    verifyPassword(user: User, password: string): Promise<boolean>;
}
//# sourceMappingURL=UserRepository.d.ts.map