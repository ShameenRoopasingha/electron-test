import * as z from 'zod';
// prettier-ignore
export const RestockModelSchema = z.object({
    id: z.number().int(),
    supplierId: z.number().int(),
    userId: z.number().int(),
    totalCost: z.number(),
    createdAt: z.date(),
    supplier: z.unknown(),
    user: z.unknown(),
    items: z.array(z.unknown())
}).strict();

export type RestockPureType = z.infer<typeof RestockModelSchema>;
