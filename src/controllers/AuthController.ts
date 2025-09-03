import { Request, Response } from "express";
import { UserService } from "../services/UserService.js";
import { UserWithRelations } from "../types/UserWithRelations.js";
import { ErreurMessages } from "../validators/erreurMessages.js";
import { StatusCodes } from "../validators/statusCodes.js";
import { TokenService } from "../services/TokenService.js";

export class AuthController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(StatusCodes.BAD_REQUEST).json({ 
                code: StatusCodes.BAD_REQUEST,
                message: ErreurMessages.EmailAndPassword 
            });
        }

        const user: UserWithRelations | null = await this.userService.findByEmail(email);
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

        // Utilisation de TokenService pour générer les tokens
        const accessToken = TokenService.generateAccessToken({ userId: user.id, role: user.profil?.name });
        const refreshToken = TokenService.generateRefreshToken({ userId: user.id });

        return res.status(StatusCodes.SUCCESS).json({ 
            code: StatusCodes.SUCCESS,
            accessToken, 
            refreshToken 
        });
    }

    async refresh(req: Request, res: Response): Promise<Response> {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({ 
                code: StatusCodes.BAD_REQUEST,
                message: ErreurMessages.NOREFRESHTOKEN 
            });
        }

        try {
            // Vérification avec TokenService
            const payload = TokenService.verifyRefreshToken<{ userId: number }>(refreshToken);
            const user: UserWithRelations | null = await this.userService.findById(payload.userId);

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
        } catch {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.REFRESHTOKENINVALID 
            });
        }
    }
}
