import * as z from 'zod';
export const BillFindManyResultSchema = z.object({
  data: z.array(z.object({
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