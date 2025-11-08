import * as z from 'zod';
export const ReturnedOrderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  billId: z.number().int().optional(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.date(),
  bill: z.unknown().optional(),
  item: z.unknown().optional()
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