import * as z from 'zod';
export const CheckoutFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});