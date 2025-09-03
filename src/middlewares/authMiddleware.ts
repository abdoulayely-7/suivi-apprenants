import { Request, Response, NextFunction } from "express";
import { TokenService } from "../services/TokenService.js";
import { StatusCodes } from "../validators/statusCodes.js";
import { ErreurMessages } from "../validators/erreurMessages.js";

export interface AuthRequest extends Request {
  user?: { userId: number; role: string };
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      code: StatusCodes.UNAUTHORIZED,
      message: ErreurMessages.TOKEN_REQUIRED,
    });
  }

 
  const token = authHeader.split(" ")[1];

  
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      code: StatusCodes.UNAUTHORIZED,
      message: ErreurMessages.TOKEN_REQUIRED,
    });
  }

  try {
    const payload = TokenService.verifyAccessToken<{ userId: number; role: string }>(token);
    req.user = { userId: payload.userId, role: payload.role };
    return next();
  } catch {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      code: StatusCodes.UNAUTHORIZED,
      message: ErreurMessages.TOKEN_INVALID,
    });
  }
}
