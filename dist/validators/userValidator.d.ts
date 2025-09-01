import { z } from "zod";
export declare const CreateUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    profilId: z.ZodNumber;
    profilSortieId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const UpdateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    profilId: z.ZodOptional<z.ZodNumber>;
    profilSortieId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=userValidator.d.ts.map