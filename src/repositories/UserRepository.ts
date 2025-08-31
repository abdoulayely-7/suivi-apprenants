import { PrismaClient, User } from "@prisma/client";
import { IRepository } from "./IRepository.js";

export class UserRepository implements IRepository<User> {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany({
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        });
    }

    async findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        });
    }

    async create(data: Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">): Promise<User> {
        return this.prisma.user.create({ data });
    }

    async update(
        id: number,
        data: Partial<Omit<User, "id" | "promoUsers" | "RefUser" | "userCompetences">>
    ): Promise<User> {
        return this.prisma.user.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }
}
