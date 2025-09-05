import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const REFRESH_SECRET = process.env.REFRESH_SECRET || "refreshSecret";
export class TokenService {
    sign(payload, secret, expiresIn) {
        const options = { expiresIn: expiresIn };
        return jwt.sign(payload, secret, options);
    }
    verify(token, secret) {
        return jwt.verify(token, secret);
    }
    generateAccessToken(payload) {
        return this.sign(payload, JWT_SECRET, "1h");
    }
    generateRefreshToken(payload) {
        return this.sign(payload, REFRESH_SECRET, "7d");
    }
    verifyAccessToken(token) {
        return this.verify(token, JWT_SECRET);
    }
    verifyRefreshToken(token) {
        return this.verify(token, REFRESH_SECRET);
    }
}
//# sourceMappingURL=TokenService.js.map