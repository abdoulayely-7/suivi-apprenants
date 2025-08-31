import {PrismaClient, Niveau} from "@prisma/client";
import { NiveauRepository } from "../repositories/NiveauRepository.js";

export class NiveauService {
    private repo: NiveauRepository;
    
        constructor(prisma: PrismaClient) {
            this.repo = new NiveauRepository(prisma);
        }
         async getAllNiveau(): Promise<Niveau[]> {
                return this.repo.findAll();
            }
        
            async createNiveau(data: Omit<Niveau, "id">): Promise<Niveau> {
                return this.repo.create(data);
            }
        
            async updateNiveau(id: number, data: Partial<Niveau>): Promise<Niveau> {
                return this.repo.update(id, data);
            }
        
            async deleteNiveau(id: number): Promise<void> {
                return this.repo.delete(id);
            }
        
            async findNiveauById(id: number): Promise<Niveau | null> {
                return this.repo.findById(id);
            }
    
}