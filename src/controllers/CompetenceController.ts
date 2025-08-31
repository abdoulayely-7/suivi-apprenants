import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CompetenceService } from "../services/CompetenceService.js";

const prisma = new PrismaClient();
const service = new CompetenceService(prisma);

export class CompetenceController {
  static async getAll(_req: Request, res: Response) {
    const competences = await service.getAllCompetences();
    res.json(competences);
  }

  static async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const competence = await service.findCompetenceById(id);
    if (!competence) return res.status(404).json({ error: "Compétence non trouvée" });
    return res.json(competence);
  }

  static async create(req: Request, res: Response) {
    try {
      const competence = await service.createCompetence(req.body);
      res.status(201).json(competence);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const competence = await service.updateCompetence(id, req.body);
      res.json(competence);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.deleteCompetence(id);
    res.status(204).send();
  }

  static async getNiveaux(req: Request, res: Response) {
    const id = Number(req.params.id);
    const niveaux = await service.getNiveauxForCompetence(id);
    res.json(niveaux);
  }
}
