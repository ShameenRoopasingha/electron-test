import * as z from 'zod';
export const RestockItemCreateResultSchema = z.object({
  id: z.number().int(),
  restockId: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  costPrice: z.number(),
  restock: z.unknown(),
  item: z.unknown().optional()
});