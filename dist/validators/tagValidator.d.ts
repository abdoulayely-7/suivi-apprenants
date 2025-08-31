import { z } from "zod";
export declare const CreateTagSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const UpdateTagSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=tagValidator.d.ts.map