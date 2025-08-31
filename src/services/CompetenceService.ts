import { PrismaClient, Competence } from "@prisma/client";
import { CompetenceRepository } from "../repositories/CompetenceRepository.js";

export class CompetenceService {
  private repo: CompetenceRepository;

  constructor(prisma: PrismaClient) {
    this.repo = new CompetenceRepository(prisma);
  }

  async getAllCompetences(): Promise<Competence[]> {
    return this.repo.findAll();
  }

  async findCompetenceById(id: number): Promise<Competence | null> {
    return this.repo.findById(id);
  }

  async createCompetence(data: Omit<Competence, "id">): Promise<Competence> {
    return this.repo.create(data);
  }

  async updateCompetence(id: number, data: Partial<Competence>): Promise<Competence> {
    return this.repo.update(id, data);
  }

  async deleteCompetence(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async getNiveauxForCompetence(id: number) {
    return this.repo.findNiveauxByCompetence(id);
  }
}
