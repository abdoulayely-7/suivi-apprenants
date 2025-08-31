import { z } from "zod";
import { ErreurMessagess } from "./erreurMessages.js";
export const CreateProfilSortieSchema = z.object({
    name: z
        .string({ message: ErreurMessagess.missingProfilSortie })
        .min(3, { message: ErreurMessagess.nameTooShort })
});
//# sourceMappingURL=ProfilSortieValidator.js.map