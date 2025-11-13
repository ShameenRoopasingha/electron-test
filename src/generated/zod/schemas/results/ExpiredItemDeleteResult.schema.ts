import * as z from 'zod';
export const ExpiredItemDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  itemId: z.number().int().optional(),
  quantity: z.number().int(),
  expirationDate: z.date(),
  disposedBy: z.number().int(),
  reason: z.string().optional(),
  createdAt: z.date(),
  item: z.unknown().optional(),
  user: z.unknown()
}));