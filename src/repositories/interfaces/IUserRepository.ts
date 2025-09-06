import { User } from "@prisma/client";
import { UserWithRelations } from "../../types/UserWithRelations.js";

export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User>;
    update(id: number, data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>): Promise<User>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<UserWithRelations | null>;
    verifyPassword(user: User, password: string): Promise<boolean>;
}
