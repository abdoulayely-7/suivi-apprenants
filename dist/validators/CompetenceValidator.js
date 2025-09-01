import { ErreurMessages } from "./erreurMessages.js";
import { z } from "zod";
export const CreateCompetenceSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingCompetenceName),
});
//# sourceMappingURL=CompetenceValidator.js.map