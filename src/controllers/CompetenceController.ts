import { Request, Response } from "express";
import { ICompetenceService } from "../services/interfaces/ICompetenceService.js";
import {CreateCompetenceSchema} from "../validators/CompetenceValidator.js";

export class CompetenceController {
  constructor(private competenceService: ICompetenceService) {

  }

  async getAll(_req: Request, res: Response) {
    const competences = await this.competenceService.getAllCompetences();
    res.json(competences);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const competence = await this.competenceService.findCompetenceById(id);
    if (!competence) return res.status(404).json({ error: "Compétence non trouvée" });
    return res.json(competence);
  }

  async create(req: Request, res: Response) {
    try {
      const data = CreateCompetenceSchema.parse(req.body);
      const competence = await this.competenceService.createCompetence(data);
      res.status(201).json(competence);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = CreateCompetenceSchema.parse(req.body);
      const id = Number(req.params.id);
      const competence = await this.competenceService.updateCompetence(id, data);
      res.json(competence);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await this.competenceService.deleteCompetence(id);
    res.status(204).send();
  }

  async getNiveaux(req: Request, res: Response) {
    const id = Number(req.params.id);
    const niveaux = await this.competenceService.getNiveauxForCompetence(id);
    res.json(niveaux);
  }
}
