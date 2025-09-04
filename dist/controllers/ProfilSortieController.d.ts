import { Request, Response } from "express";
import { IProfilSortieService } from "../services/interfaces/IProfilSortieService.js";
export declare class ProfilSortieController {
    private profilSortieService;
    constructor(profilSortieService: IProfilSortieService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ProfilSortieController.d.ts.map