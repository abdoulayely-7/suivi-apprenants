import jwt, { JwtPayload } from "jsonwebtoken";

export class JwtService {
    private secret: string;
    private refreshSecret: string;

    constructor(secret: string, refreshSecret: string) {
        this.secret = secret;
        this.refreshSecret = refreshSecret;
    }

    generateAccessToken(payload: object, expiresIn: string = "1h"): string {
        return jwt.sign(payload, this.secret, { expiresIn });
    }

    generateRefreshToken(payload: object, expiresIn: string = "7d"): string {
        return jwt.sign(payload, this.refreshSecret, { expiresIn });
    }

    verifyAccessToken(token: string): JwtPayload | null {
        try {
            return jwt.verify(token, this.secret) as JwtPayload;
        } catch {
            return null;
        }
    }

    verifyRefreshToken(token: string): JwtPayload | null {
        try {
            return jwt.verify(token, this.refreshSecret) as JwtPayload;
        } catch {
            return null;
        }
    }
}
