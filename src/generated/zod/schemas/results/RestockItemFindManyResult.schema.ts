import * as z from 'zod';
export const RestockItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  restockId: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  costPrice: z.number(),
  restock: z.unknown(),
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