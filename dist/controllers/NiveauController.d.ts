import { Request, Response } from "express";
import { INiveauService } from "../services/interfaces/INiveauService.js";
export declare class NiveauController {
    private niveauService;
    constructor(niveauService: INiveauService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=NiveauController.d.ts.map