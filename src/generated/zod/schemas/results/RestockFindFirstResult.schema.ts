import * as z from 'zod';
export const RestockFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.date(),
  supplier: z.unknown(),
  user: z.unknown(),
  items: z.array(z.unknown())
}));