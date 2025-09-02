import jwt from "jsonwebtoken";
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
            return res.status(400).json({ message: "Email et mot de passe requis" });
        }
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }
        const valid = await this.userService.verifyPassword(user, password);
        if (!valid) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }
        const accessToken = jwt.sign({ userId: user.id, role: user.profil?.name }, JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: "7d" });
        return res.status(200).json({ accessToken, refreshToken });
    }
    async refresh(req, res) {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(400).json({ message: "Refresh token requis" });
        }
        try {
            const payload = jwt.verify(refreshToken, REFRESH_SECRET);
            const user = await this.userService.findById(payload.userId);
            if (!user) {
                return res.status(401).json({ message: "Utilisateur introuvable" });
            }
            const accessToken = jwt.sign({ userId: user.id, role: user.profil?.name }, JWT_SECRET, { expiresIn: "1h" });
            return res.status(200).json({ accessToken });
        }
        catch {
            return res.status(401).json({ message: "Refresh token invalide" });
        }
    }
}
//# sourceMappingURL=AuthController.js.map