import { PrismaClient, Niveau } from "@prisma/client";
import { INiveauRepository } from "./interfaces/INiveauRepository.js";
 
export class NiveauRepository implements INiveauRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    async findAll(): Promise<Niveau[]> {
        return this.prisma.niveau.findMany();
    }

    async findById(id: number): Promise<Niveau | null> {
        return this.prisma.niveau.findUnique({ where: { id } });
    }

     async create(data: Omit<Niveau, "id">): Promise<Niveau> {
        return this.prisma.niveau.create({ data });
    }

    async update(id: number, data: Partial< Niveau>): Promise<Niveau> {
        return this.prisma.niveau.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
   
    await this.prisma.userCompetence.deleteMany({
    where: { niveauId: id },
  });

   
  await this.prisma.niveau.delete({
    where: { id },
  });
}

}
