import { Request, Response, NextFunction } from "express";
import { ITokenService } from "../services/ITokenService.js";
export interface AuthRequest extends Request {
    user?: {
        userId: number;
        role: string;
    };
}
export declare function makeAuthenticate(tokens: ITokenService): (req: AuthRequest, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
//# sourceMappingURL=authMiddleware.d.ts.map