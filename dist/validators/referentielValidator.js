import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreateReferentielSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingReferentielName),
});
export const AddCompetenceToReferentielSchema = z.object({
    competenceId: z.number().positive("L'ID de la compétence doit être un nombre positif"),
});
//# sourceMappingURL=referentielValidator.js.map