import { Request, Response } from "express";
export declare class ProfileController {
    static getAll(_req: Request, res: Response): Promise<void>;
    static findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static create(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<void>;
    static delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ProfilController.d.ts.map