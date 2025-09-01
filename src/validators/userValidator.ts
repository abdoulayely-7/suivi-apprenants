import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";

export const CreateUserSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingUserName),
    email: z.string().email(ErreurMessages.invalidEmail),
    profilId: z.number().int().positive(ErreurMessages.missingProfilId),
    profilSortieId: z.number().int().positive(ErreurMessages.invalidProfilSortieId).optional(),
});

export const UpdateUserSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingUserName).optional(),
    email: z.string().email(ErreurMessages.invalidEmail).optional(),
    profilId: z.number().int().positive(ErreurMessages.missingProfilId).optional(),
    profilSortieId: z.number().int().positive(ErreurMessages.invalidProfilSortieId).optional(),
});
