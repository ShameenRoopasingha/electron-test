import * as z from 'zod';
export const DefectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.date(),
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