
import { PrismaClient, Profil } from "@prisma/client";

import { IProfilRepository } from "./interfaces/IProfilRepository.js";

export class ProfileRepository implements IProfilRepository {

    constructor(private prisma: PrismaClient) {
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
        return this.prisma.profil.update({ where: { id }, data:{...data} });
    }

    async  delete(id: number): Promise<void> {
        await this.prisma.profil.delete({ where: { id } });
    }


}