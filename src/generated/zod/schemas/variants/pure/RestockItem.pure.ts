import * as z from 'zod';
// prettier-ignore
export const RestockItemModelSchema = z.object({
    id: z.number().int(),
    restockId: z.number().int(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    costPrice: z.number(),
    restock: z.unknown(),
    item: z.unknown().nullable()
}).strict();

export type RestockItemPureType = z.infer<typeof RestockItemModelSchema>;
