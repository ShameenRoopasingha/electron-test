import * as z from 'zod';
export const DefectUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.date(),
  item: z.unknown().optional()
}));