import { Referentiel, Competence } from "@prisma/client";
import { IReferentielRepository } from "../repositories/interfaces/IReferentielRepository.js";
import { IReferentielService } from "./interfaces/IReferentielService.js";

export class ReferentielService implements IReferentielService {
  private repo: IReferentielRepository;

  constructor(repo: IReferentielRepository) {
    this.repo = repo;
  }

  async getAllReferentiels(): Promise<any[]> {
  return this.repo.findAll();
  }

  async createReferentiel(data: Omit<Referentiel, "id">): Promise<Referentiel> {
    return this.repo.create(data);
  }

  async updateReferentiel(
    id: number,
    data: Partial<Referentiel>
  ): Promise<Referentiel> {
    return this.repo.update(id, data);
  }

  async deleteReferentiel(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async findReferentielById(id: number): Promise<Referentiel | null> {
    return this.repo.findById(id);
  }

  async getCompetencesByReferentielId(
    referentielId: number
  ): Promise<Competence[]> {
    return this.repo.getCompetencesByReferentielId(referentielId);
  }

  async addCompetenceToReferentiel(
    referentielId: number,
    competenceId: number
  ): Promise<void> {
    return this.repo.addCompetenceToReferentiel(referentielId, competenceId);
  }

  async addCompetencesToReferentiel(referentielId: number, competenceIds: number[]): Promise<void> {
    return this.repo.addCompetencesToReferentiel(referentielId, competenceIds);
  }
}
