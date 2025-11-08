import * as z from 'zod';
export const ReturnedOrderCreateResultSchema = z.object({
  id: z.number().int(),
  billId: z.number().int().optional(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.date(),
  bill: z.unknown().optional(),
  item: z.unknown().optional()
});