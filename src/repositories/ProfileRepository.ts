import { PrismaClient, Profil } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class ProfileRepository implements IRepository<Profil>{
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    async findAll(): Promise<Profil[]> {
        return this.prisma.profil.findMany();
    }

    async findById(id: number): Promise<Profil | null> {
        return this.prisma.profil.findUnique({ where: { id } });
    }

     async create(data: Omit<Profil, "id">): Promise<Profil> {
        return this.prisma.profil.create({ data });
    }

    async update(id: number, data: Partial<Profil>): Promise<Profil> {
        return this.prisma.profil.update({ where: { id }, data });
    }

    async  delete(id: number): Promise<void> {
        await this.prisma.profil.delete({ where: { id } });
    }


}
