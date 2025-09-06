import { ProfilSortie } from "@prisma/client";
import { IProfilSortieRepository } from "../repositories/interfaces/IProfilSortieRepository.js";
import { IProfilSortieService } from "./interfaces/IProfilSortieService.js";

export class ProfilSortieService implements IProfilSortieService {
    private repo: IProfilSortieRepository;
    
        constructor(repo: IProfilSortieRepository) {
            this.repo = repo;
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