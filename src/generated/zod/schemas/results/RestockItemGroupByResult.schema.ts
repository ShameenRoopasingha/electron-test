import * as z from 'zod';
export const RestockItemGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  restockId: z.number().int(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  costPrice: z.number(),
  _count: z.object({
    id: z.number(),
    restockId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
    costPrice: z.number(),
    restock: z.number(),
    item: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    restockId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    costPrice: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    restockId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    costPrice: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    restockId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    costPrice: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    restockId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    costPrice: z.number().nullable()
  }).nullable().optional()
}));