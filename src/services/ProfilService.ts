
import {Profil} from "@prisma/client";
import { IProfilRepository } from "../repositories/interfaces.js";
import { IProfilService } from "./interfaces/IProfilService.js";

export class ProfileService implements IProfilService {
    private repo: IProfilRepository;

    constructor(repo) {
        this.repo = repo
    }

    async getAllProfiles(): Promise<Profil[]> {
        return this.repo.findAll();
    }

    async createProfile(data: Omit<Profil, "id">): Promise<Profil> {
        return this.repo.create(data);
    }

    async updateProfile(id: number, data: Partial<Profil>): Promise<Profil> {
        return this.repo.update(id, data);
    }

    async deleteProfile(id: number): Promise<void> {
        return this.repo.delete(id);
    }

    async findProfileById(id: number): Promise<Profil | null> {
        return this.repo.findById(id);
    }
}
