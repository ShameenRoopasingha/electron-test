import * as z from 'zod';
export const ExpiredItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  expirationDate: z.date(),
  disposedBy: z.number().int(),
  reason: z.string().optional(),
  createdAt: z.date(),
  item: z.unknown().optional(),
  user: z.unknown()
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