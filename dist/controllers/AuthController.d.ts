import { Request, Response } from "express";
import { UserService } from "../services/UserService.js";
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    login(req: Request, res: Response): Promise<Response>;
    refresh(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=AuthController.d.ts.map