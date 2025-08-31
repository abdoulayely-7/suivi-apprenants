import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreateNiveauSchema = z.object({
    name: z
        .string({ message: ErreurMessages.missingNiveauName })
        .min(2, { message: ErreurMessages.nameTooShort })
});
//# sourceMappingURL=NiveauValidator.js.map