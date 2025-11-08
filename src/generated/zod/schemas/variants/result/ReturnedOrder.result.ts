import * as z from 'zod';
// prettier-ignore
export const ReturnedOrderResultSchema = z.object({
    id: z.number().int(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    createdAt: z.date(),
    bill: z.unknown().nullable(),
    item: z.unknown().nullable()
}).strict();

export type ReturnedOrderResultType = z.infer<typeof ReturnedOrderResultSchema>;
