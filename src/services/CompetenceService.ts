import {PrismaClient, Competence} from "@prisma/client";
import { CompetenceRepository } from "../repositories/CompetenceRepository.js";

export class CompetenceService {
    private repo: CompetenceRepository;
    
        constructor(prisma: PrismaClient) {
            this.repo = new CompetenceRepository(prisma);
        }
         async getAllCompetence(): Promise<Competence[]> {
                return this.repo.findAll();
            }
        
            async createCompetence(data: Omit<Competence, "id">): Promise<Competence> {
                return this.repo.create(data);
            }
        
            async updateCompetence(id: number, data: Partial<Competence>): Promise<Competence> {
                return this.repo.update(id, data);
            }
        
            async deleteComptence(id: number): Promise<void> {
                return this.repo.delete(id);
            }
        
            async findCompetenceById(id: number): Promise<Competence | null> {
                return this.repo.findById(id);
            }
    
}