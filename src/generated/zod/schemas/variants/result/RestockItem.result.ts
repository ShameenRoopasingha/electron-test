import * as z from 'zod';
// prettier-ignore
export const RestockItemResultSchema = z.object({
    id: z.number().int(),
    restockId: z.number().int(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    costPrice: z.number(),
    restock: z.unknown(),
    item: z.unknown().nullable()
}).strict();

export type RestockItemResultType = z.infer<typeof RestockItemResultSchema>;
