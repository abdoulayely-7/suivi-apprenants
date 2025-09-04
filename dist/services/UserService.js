export class UserService {
    repo;
    constructor(repo) {
        this.repo = repo;
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
    //  async findByEmail(email: string): Promise<User | null> {
    //     return this.repo.findByEmail(email);
    // }
    // async verifyPassword(user: User, password: string): Promise<boolean> {
    //     return bcrypt.compare(password, user.password);
    // }
    async findByEmail(email) {
        return this.repo.findByEmail(email);
    }
    async findById(id) {
        return this.repo.findById(id);
    }
    async verifyPassword(user, password) {
        return this.repo.verifyPassword(user, password);
    }
}
//# sourceMappingURL=UserService.js.map