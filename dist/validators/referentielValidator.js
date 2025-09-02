import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreateReferentielSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingReferentielName),
});
export const AddCompetenceToReferentielSchema = z.object({
    competenceId: z.number().positive("L'ID de la compétence doit être un nombre positif"),
});
export const AddCompetencesToReferentielSchema = z.object({
    competenceIds: z.array(z.number().positive("L'ID de la compétence doit être un nombre positif"))
        .min(1, "Au moins une compétence doit être fournie"),
});
//# sourceMappingURL=referentielValidator.js.map