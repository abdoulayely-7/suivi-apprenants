import { PrismaClient, Profile } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class ProfileRepository implements IRepository<Profile>{
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    async findAll(): Promise<Profile[]> {
        return this.prisma.profile.findMany();
    }

    async findById(id: number): Promise<Profile | null> {
        return this.prisma.profile.findUnique({ where: { id } });
    }

     async create(data: Omit<Profile, "id">): Promise<Profile> {
        return this.prisma.profile.create({ data });
    }

    async update(id: number, data: Partial<Profile>): Promise<Profile> {
        return this.prisma.profile.update({ where: { id }, data });
    }

    async  delete(id: number): Promise<void> {
        await this.prisma.profile.delete({ where: { id } });
    }


}
