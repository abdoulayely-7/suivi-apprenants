import { z } from "zod";
import { ErreurMessagess } from "./erreurMessages.js";
export const CreateCompetenceSchema = z.object({
    name: z
        .string({ message: ErreurMessagess.missingCompetenceName })
        .min(3, { message: ErreurMessagess.nameTooShort })
        .max(50, { message: ErreurMessagess.nameTooLong }),
    description: z
        .string()
        .max(200, { message: ErreurMessagess.descriptionTooLong })
        .optional()
});
//# sourceMappingURL=competenceValidator.js.map