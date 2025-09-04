import { Request, Response } from "express";
import { UserService } from "../services/UserService.js";
import { ITokenService } from "../services/ITokenService.js";
export declare class AuthController {
    private userService;
    private tokens;
    constructor(userService: UserService, tokens: ITokenService);
    login(req: Request, res: Response): Promise<Response>;
    refresh(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=AuthController.d.ts.map