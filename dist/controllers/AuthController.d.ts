import { Request, Response } from "express";
import { ITokenService } from "../services/ITokenService.js";
import { IUserService } from "../services/interfaces/IUserService.js";
export declare class AuthController {
    private userService;
    private tokens;
    constructor(userService: IUserService, tokens: ITokenService);
    login(req: Request, res: Response): Promise<Response>;
    refresh(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=AuthController.d.ts.map