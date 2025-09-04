import { Request, Response } from "express";
import { IUserService } from "../services/interfaces/IUserService.js";
export declare class UserController {
    private userService;
    constructor(userService: IUserService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=UserController.d.ts.map