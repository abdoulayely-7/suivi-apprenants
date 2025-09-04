import { PrismaClient, User} from "@prisma/client";
import { UserWithRelations } from "../types/UserWithRelations.js";
import { IRepository } from "./IRepository.js";
import bcrypt from "bcrypt"; 

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
    await this.prisma.$transaction([
        this.prisma.promoUser.deleteMany({ where: { userId: id } }),
        this.prisma.refUser.deleteMany({ where: { userId: id } }),
        this.prisma.userCompetence.deleteMany({ where: { userId: id } }),
        this.prisma.user.delete({ where: { id } }),
    ]);
}


// async findByEmail(email: string): Promise<User | null> {
//         return this.prisma.user.findUnique({
//             where: { email },
//             include: {
//                 profil: true,
//                 profilSortie: true,
//                 promoUsers: { include: { promo: true } },
//                 RefUser: { include: { referentiel: true } },
//                 userCompetences: { include: { competence: true, niveau: true } },
//             },
//         });
//     }

 async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { email },
            include: {
                profil: true,
                profilSortie: true,
                promoUsers: { include: { promo: true } },
                RefUser: { include: { referentiel: true } },
                userCompetences: { include: { competence: true, niveau: true } },
            },
        })as Promise<UserWithRelations | null>;;
    }

    async verifyPassword(user: User, password: string): Promise<boolean> {
        return bcrypt.compare(password, user.password);
    }
}
