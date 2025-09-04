import { CreateUserSchema, UpdateUserSchema } from "../validators/userValidator.js";
export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getAll(_req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await this.userService.findUserById(id);
            if (!user) {
                return res.status(404).json({ error: "Utilisateur non trouvé" });
            }
            return res.json(user);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = CreateUserSchema.parse(req.body);
            const user = await this.userService.createUser(data);
            res.status(201).json(user);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = UpdateUserSchema.parse(req.body);
            const user = await this.userService.updateUser(id, data);
            res.json(user);
        }
        catch (error) {
            const errors = error.errors ?? [{ message: error.message }];
            res.status(400).json({ errors });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await this.userService.deleteUser(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
//# sourceMappingURL=UserController.js.map