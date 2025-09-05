import { JwtPayload } from "jsonwebtoken";
import { ITokenService } from "./ITokenService.js";
export declare class TokenService implements ITokenService {
    private sign;
    private verify;
    generateAccessToken(payload: object): string;
    generateRefreshToken(payload: object): string;
    verifyAccessToken<T extends JwtPayload | string>(token: string): T;
    verifyRefreshToken<T extends JwtPayload | string>(token: string): T;
}
//# sourceMappingURL=TokenService.d.ts.map