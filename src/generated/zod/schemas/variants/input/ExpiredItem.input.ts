import * as z from 'zod';
// prettier-ignore
export const ExpiredItemInputSchema = z.object({
    id: z.number().int(),
    itemId: z.number().int().optional().nullable(),
    quantity: z.number().int(),
    expirationDate: z.date(),
    disposedBy: z.number().int(),
    reason: z.string().optional().nullable(),
    createdAt: z.date(),
    item: z.unknown().optional().nullable(),
    user: z.unknown()
}).strict();

export type ExpiredItemInputType = z.infer<typeof ExpiredItemInputSchema>;
