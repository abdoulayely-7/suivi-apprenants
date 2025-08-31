import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreateProfileSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingProfileName),
});
export const CreateCompetenceSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingCompetenceName),
});
//# sourceMappingURL=profileValidator.js.map