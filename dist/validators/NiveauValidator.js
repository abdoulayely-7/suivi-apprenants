import { z } from "zod";
import { ErreurMessagess } from "./erreurMessages.js";
export const CreateNiveauSchema = z.object({
    name: z
        .string({ message: ErreurMessagess.missingNiveauName })
        .min(3, { message: ErreurMessagess.nameTooShort })
});
//# sourceMappingURL=NiveauValidator.js.map