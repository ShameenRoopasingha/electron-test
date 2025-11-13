import * as z from 'zod';
// prettier-ignore
export const RestockItemInputSchema = z.object({
    id: z.number().int(),
    restockId: z.number().int(),
    itemId: z.number().int().optional().nullable(),
    quantity: z.number().int(),
    costPrice: z.number(),
    restock: z.unknown(),
    item: z.unknown().optional().nullable()
}).strict();

export type RestockItemInputType = z.infer<typeof RestockItemInputSchema>;
