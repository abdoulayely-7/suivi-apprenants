import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreateTagSchema = z.object({
    name: z
        .string()
        .min(1, ErreurMessages.missingTagName)
        .min(2, ErreurMessages.tagNameTooShort)
        .max(50, ErreurMessages.tagNameTooLong),
});
export const UpdateTagSchema = CreateTagSchema.partial();
//# sourceMappingURL=tagValidator.js.map