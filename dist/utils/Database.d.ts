import { PrismaClient } from "@prisma/client";
export declare class Database extends PrismaClient {
    private static instance;
    private constructor();
    static getInstance(): Database;
}
//# sourceMappingURL=Database.d.ts.map