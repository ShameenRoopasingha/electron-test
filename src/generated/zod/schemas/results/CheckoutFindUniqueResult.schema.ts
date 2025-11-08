import * as z from 'zod';
export const CheckoutFindUniqueResultSchema = z.nullable(z.object({
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
}));