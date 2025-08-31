import { z } from "zod";
import { ErreurMessages } from "./erreurMessages.js";
export const CreatePromoSchema = z.object({
    name: z.string().min(1, ErreurMessages.missingPromoName),
});
//# sourceMappingURL=promoValidator.js.map