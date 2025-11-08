import * as z from 'zod';
// prettier-ignore
export const ExpiredItemResultSchema = z.object({
    id: z.number().int(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    expirationDate: z.date(),
    disposedBy: z.number().int(),
    reason: z.string().nullable(),
    createdAt: z.date(),
    item: z.unknown().nullable(),
    user: z.unknown()
}).strict();

export type ExpiredItemResultType = z.infer<typeof ExpiredItemResultSchema>;
