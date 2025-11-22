import * as z from 'zod';
export const RestockFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.date(),
  supplier: z.unknown(),
  user: z.unknown(),
  items: z.array(z.unknown())
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