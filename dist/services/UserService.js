import { UserRepository } from "../repositories/UserRepository.js";
export class UserService {
    repo;
    constructor(prisma) {
        this.repo = new UserRepository(prisma);
    }
    async getAllUsers() {
        return this.repo.findAll();
    }
    async findUserById(id) {
        return this.repo.findById(id);
    }
    async createUser(data) {
        return this.repo.create(data);
    }
    async updateUser(id, data) {
        return this.repo.update(id, data);
    }
    async deleteUser(id) {
        await this.repo.delete(id);
    }
}
//# sourceMappingURL=UserService.js.map