import * as z from 'zod';
// prettier-ignore
export const CheckoutModelSchema = z.object({
    id: z.number().int(),
    billId: z.number().int(),
    itemId: z.number().int(),
    quantity: z.number().int(),
    price: z.number(),
    payedAmount: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    bill: z.unknown(),
    item: z.unknown()
}).strict();

export type CheckoutPureType = z.infer<typeof CheckoutModelSchema>;
