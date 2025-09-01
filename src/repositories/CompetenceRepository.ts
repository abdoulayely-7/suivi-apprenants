import { PrismaClient, Competence } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class CompetenceRepository implements IRepository<Competence> {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll(): Promise<Competence[]> {
    return this.prisma.competence.findMany();
  }

  async findById(id: number): Promise<Competence | null> {
    return this.prisma.competence.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Competence, "id">): Promise<Competence> {
    return this.prisma.competence.create({ data });
  }

  async update(id: number, data: Partial<Competence>): Promise<Competence> {
    return this.prisma.competence.update({
      where: { id },
      data,
    });
  }

//   async delete(id: number): Promise<void> {
//     await this.prisma.competence.delete({ where: { id } });
//   }

    // async delete(id: number): Promise<void> {
    
    // await this.prisma.userCompetence.deleteMany({
    //     where: { competenceId: id },
    // });

    
    // await this.prisma.competence.delete({
    //     where: { id },
    // });
    // }

    // async delete(id: number): Promise<void> {
    // const used = await this.prisma.userCompetence.count({
    //     where: { competenceId: id },
    // });

    // if (used > 0) {
    //     throw new Error("Impossible de supprimer : compétence encore utilisée par des utilisateurs.");
    // }

    // await this.prisma.competence.delete({ where: { id } });
    // }

        async delete(id: number): Promise<void> {
            const usedInUser = await this.prisma.userCompetence.count({
                 where: { competenceId: id },
            });

            const usedInRef = await this.prisma.refCompetence.count({
                where: { competenceId: id },
            });

            if (usedInUser > 0 || usedInRef > 0) {
             throw new Error("Impossible de supprimer : compétence encore utilisée.");
            }

             await this.prisma.competence.delete({ where: { id } });
        }


  
  async findNiveauxByCompetence(id: number) {
    return this.prisma.userCompetence.findMany({
      where: { competenceId: id },
      
      include: { 
        niveau: true,
        competence:true
      }, 
    });
  }
}
