import {PrismaClient, Profile} from "@prisma/client";
import { ProfileRepository } from "../repositories/ProfileRepository.js";

export class ProfileService {
    private repo: ProfileRepository;

    constructor(prisma: PrismaClient) {
        this.repo = new ProfileRepository(prisma);
    }

    async getAllProfiles(): Promise<Profile[]> {
        return this.repo.findAll();
    }

    async createProfile(data: Omit<Profile, "id">): Promise<Profile> {
        return this.repo.create(data);
    }

    async updateProfile(id: number, data: Partial<Profile>): Promise<Profile> {
        return this.repo.update(id, data);
    }

    async deleteProfile(id: number): Promise<void> {
        return this.repo.delete(id);
    }

    async findProfileById(id: number): Promise<Profile | null> {
        return this.repo.findById(id);
    }
}
