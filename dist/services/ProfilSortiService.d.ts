import { ProfilSortie } from "@prisma/client";
import { IProfilSortieRepository } from "../repositories/interfaces.js";
import { IProfilSortieService } from "./interfaces/IProfilSortieService.js";
export declare class ProfilSortieService implements IProfilSortieService {
    private repo;
    constructor(repo: IProfilSortieRepository);
    getAllProfilSortie(): Promise<ProfilSortie[]>;
    createProfilSortie(data: Omit<ProfilSortie, "id">): Promise<ProfilSortie>;
    updateProfilSortie(id: number, data: Partial<ProfilSortie>): Promise<ProfilSortie>;
    deleteProfilSortie(id: number): Promise<void>;
    findProfilSortieById(id: number): Promise<ProfilSortie | null>;
}
//# sourceMappingURL=ProfilSortiService.d.ts.map