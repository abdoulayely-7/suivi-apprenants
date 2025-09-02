import jwt from "jsonwebtoken";
import { StatusCodes } from "../validators/StatusCodes.js";
import { ErreurMessages } from "../validators/erreurMessages.js";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const REFRESH_SECRET = process.env.REFRESH_SECRET || "refreshSecret";
export class AuthController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                code: StatusCodes.BAD_REQUEST,
                message: ErreurMessages.emailrequired
            });
        }
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.invalidIdentifiants
            });
        }
        const valid = await this.userService.verifyPassword(user, password);
        if (!valid) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.invalidIdentifiants
            });
        }
        const accessToken = jwt.sign({ userId: user.id, role: user.profil?.name }, JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: "7d" });
        return res.status(StatusCodes.SUCCESS).json({
            code: StatusCodes.SUCCESS,
            accessToken, refreshToken
        });
    }
    async refresh(req, res) {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                code: StatusCodes.BAD_REQUEST,
                message: ErreurMessages.tokenRequired
            });
        }
        try {
            const payload = jwt.verify(refreshToken, REFRESH_SECRET);
            const user = await this.userService.findById(payload.userId);
            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    code: StatusCodes.UNAUTHORIZED,
                    message: ErreurMessages.introuvableUser
                });
            }
            const accessToken = jwt.sign({ userId: user.id, role: user.profil?.name }, JWT_SECRET, { expiresIn: "1h" });
            return res.status(StatusCodes.SUCCESS).json({
                code: StatusCodes.SUCCESS,
                accessToken
            });
        }
        catch {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.refreshInvalid
            });
        }
    }
}
//# sourceMappingURL=AuthController.js.map