import * as z from 'zod';
// prettier-ignore
export const ReturnedOrderInputSchema = z.object({
    id: z.number().int(),
    billId: z.number().int().optional().nullable(),
    itemId: z.number().int().optional().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    createdAt: z.date(),
    bill: z.unknown().optional().nullable(),
    item: z.unknown().optional().nullable()
}).strict();

export type ReturnedOrderInputType = z.infer<typeof ReturnedOrderInputSchema>;
