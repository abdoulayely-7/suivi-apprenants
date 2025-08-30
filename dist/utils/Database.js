import { PrismaClient } from "@prisma/client";
export class Database extends PrismaClient {
    static instance;
    constructor() {
        super();
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
            console.log("PrismaClient instance created");
        }
        return Database.instance;
    }
}
//# sourceMappingURL=Database.js.map