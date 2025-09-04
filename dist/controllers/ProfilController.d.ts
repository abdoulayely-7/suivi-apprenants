import { Request, Response } from "express";
import { IProfilService } from "../services/interfaces/IProfilService.js";
export declare class ProfileController {
    private profilService;
    constructor(profilService: IProfilService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ProfilController.d.ts.map