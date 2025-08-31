import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";

export const CreateProfilSortieSchema = z.object({
    name: z
        .string({ message: ErreurMessages.missingProfilSortie })
        .min(3, { message: ErreurMessages.nameTooShort })
});
