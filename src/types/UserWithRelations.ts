import { User, Profil, ProfilSortie } from "@prisma/client";

export type UserWithRelations = User & {
    profil?: Profil;
    profilSortie?: ProfilSortie;
};