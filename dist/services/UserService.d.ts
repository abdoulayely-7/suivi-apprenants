import { PrismaClient, User } from "@prisma/client";
export declare class UserService {
    private repo;
    constructor(prisma: PrismaClient);
    getAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User | null>;
    createUser(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User>;
    updateUser(id: number, data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
//# sourceMappingURL=UserService.d.ts.map