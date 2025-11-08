import * as z from 'zod';
// prettier-ignore
export const ReturnedOrderModelSchema = z.object({
    id: z.number().int(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    createdAt: z.date(),
    bill: z.unknown().nullable(),
    item: z.unknown().nullable()
}).strict();

export type ReturnedOrderPureType = z.infer<typeof ReturnedOrderModelSchema>;
