import { RBAC } from "../config/rbac.js";
import { StatusCodes } from "../validators/statusCodes.js";
import { ErreurMessages } from "../validators/erreurMessages.js";
export function authorize(module) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                code: StatusCodes.UNAUTHORIZED,
                message: ErreurMessages.TOKEN_REQUIRED,
            });
        }
        const role = req.user.role;
        const method = req.method.toUpperCase();
        const allowedMethods = RBAC[role]?.[module] || [];
        if (!allowedMethods.includes(method)) {
            return res.status(StatusCodes.FORBIDDEN).json({
                code: StatusCodes.FORBIDDEN,
                message: ErreurMessages.ACCESS_DENIED,
            });
        }
        return next();
    };
}
//# sourceMappingURL=rbacMiddleware.js.map