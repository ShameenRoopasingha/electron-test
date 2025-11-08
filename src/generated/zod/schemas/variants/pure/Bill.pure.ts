import * as z from 'zod';
// prettier-ignore
export const BillModelSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    customerId: z.number().int(),
    totalAmount: z.number(),
    paymentMethod: z.string(),
    paymentStatus: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    customer: z.unknown(),
    checkouts: z.array(z.unknown()),
    returnedOrders: z.array(z.unknown())
}).strict();

export type BillPureType = z.infer<typeof BillModelSchema>;
