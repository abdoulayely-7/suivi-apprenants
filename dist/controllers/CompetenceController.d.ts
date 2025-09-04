import { Request, Response } from "express";
import { ICompetenceService } from "../services/interfaces/ICompetenceService.js";
export declare class CompetenceController {
    private competenceService;
    constructor(competenceService: ICompetenceService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    getNiveaux(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=CompetenceController.d.ts.map