import { ErreurMessages } from "../validators/erreurMessages.js";
import { StatusCodes } from "../validators/statusCodes.js";
import { TokenService } from "../services/TokenService.js";
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
                message: ErreurMessages.EmailAndPassword
            });
        }
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.IVALID
            });
        }
        const valid = await this.userService.verifyPassword(user, password);
        if (!valid) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.IVALID
            });
        }
        const accessToken = TokenService.generateAccessToken({ userId: user.id, role: user.profil?.name });
        const refreshToken = TokenService.generateRefreshToken({ userId: user.id });
        // ⚡ Stockage du refresh token dans un cookie HTTPOnly
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
        });
        return res.status(StatusCodes.SUCCESS).json({
            code: StatusCodes.SUCCESS,
            accessToken
        });
    }
    async refresh(req, res) {
        const refreshToken = req.cookies.refreshToken; // ✅ depuis le cookie
        if (!refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                code: StatusCodes.BAD_REQUEST,
                message: ErreurMessages.NOREFRESHTOKEN
            });
        }
        try {
            const payload = TokenService.verifyRefreshToken(refreshToken);
            const user = await this.userService.findById(payload.userId);
            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    code: StatusCodes.UNAUTHORIZED,
                    message: ErreurMessages.USERINVALID
                });
            }
            const accessToken = TokenService.generateAccessToken({ userId: user.id, role: user.profil?.name });
            return res.status(StatusCodes.SUCCESS).json({
                code: StatusCodes.SUCCESS,
                accessToken
            });
        }
        catch {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.REFRESHTOKENINVALID
            });
        }
    }
}
//# sourceMappingURL=AuthController.js.map