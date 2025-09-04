import { Request, Response } from "express";
import { IPromoService } from "../services/interfaces/IPromoService.js";
export declare class PromoController {
    private promoService;
    constructor(promoService: IPromoService);
    getFormateurs(req: Request, res: Response): Promise<void>;
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=PromoController.d.ts.map