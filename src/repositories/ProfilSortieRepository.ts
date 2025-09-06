import { PrismaClient, ProfilSortie } from "@prisma/client";

import { IProfilSortieRepository } from "./interfaces/IProfilSortieRepository.js";

export class ProfilSortieRepository implements IProfilSortieRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    async findAll(): Promise<ProfilSortie[]> {
        return this.prisma.profilSortie.findMany();
    }

    async findById(id: number): Promise<ProfilSortie | null> {
        return this.prisma.profilSortie.findUnique({ where: { id } });
    }

     async create(data: Omit<ProfilSortie, "id">): Promise<ProfilSortie> {
        return this.prisma.profilSortie.create({ data });
    }

    async update(id: number, data: Partial< ProfilSortie>): Promise<ProfilSortie> {
        return this.prisma.profilSortie.update({ where: { id }, data:{...data} });
    }

    async delete(id: number): Promise<void> {
      await this.prisma.profilSortie.delete({
        where: { id },
      });
}


}
