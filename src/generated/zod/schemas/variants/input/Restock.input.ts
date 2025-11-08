import * as z from 'zod';
// prettier-ignore
export const RestockInputSchema = z.object({
    id: z.number().int(),
    supplierId: z.number().int(),
    userId: z.number().int(),
    totalCost: z.number(),
    createdAt: z.date(),
    supplier: z.unknown(),
    items: z.array(z.unknown())
}).strict();

export type RestockInputType = z.infer<typeof RestockInputSchema>;
