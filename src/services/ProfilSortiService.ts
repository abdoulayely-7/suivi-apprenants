import {PrismaClient, ProfilSortie} from "@prisma/client";
import { ProfilSortieRepository } from "../repositories/ProfilSortieRepository.js";

export class ProfilSortieService {
    private repo: ProfilSortieRepository;
    
        constructor(prisma: PrismaClient) {
            this.repo = new ProfilSortieRepository(prisma);
        }
         async getAllProfilSortie(): Promise<ProfilSortie[]> {
                return this.repo.findAll();
            }
        
            async createProfilSortie(data: Omit<ProfilSortie, "id">): Promise<ProfilSortie> {
                return this.repo.create(data);
            }
        
            async updateProfilSortie(id: number, data: Partial<ProfilSortie>): Promise<ProfilSortie> {
                return this.repo.update(id, data);
            }
        
            async deleteProfilSortie(id: number): Promise<void> {
                return this.repo.delete(id);
            }
        
            async findProfilSortieById(id: number): Promise<ProfilSortie | null> {
                return this.repo.findById(id);
            }
    
}