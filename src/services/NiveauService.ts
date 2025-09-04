import { Niveau } from "@prisma/client";
import { INiveauRepository } from "../repositories/interfaces.js";
import { INiveauService } from "./interfaces/INiveauService.js";

export class NiveauService implements INiveauService {
    private repo: INiveauRepository;
    
        constructor(repo: INiveauRepository) {
            this.repo = repo;
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