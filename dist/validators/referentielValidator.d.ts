import { z } from "zod";
export declare const CreateReferentielSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const AddCompetenceToReferentielSchema: z.ZodObject<{
    competenceId: z.ZodNumber;
}, z.core.$strip>;
export declare const AddCompetencesToReferentielSchema: z.ZodObject<{
    competenceIds: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=referentielValidator.d.ts.map