import { Request, Response } from "express";
import { IReferentielService } from "../services/interfaces/IReferentielService.js";
export declare class ReferentielController {
    private referentielService;
    constructor(referentielService: IReferentielService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    getCompetences(req: Request, res: Response): Promise<void>;
    addCompetence(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ReferentielController.d.ts.map