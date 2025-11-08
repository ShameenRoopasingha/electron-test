import * as z from 'zod';
export const ItemFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  categoryId: z.number().int(),
  supplierId: z.number().int(),
  barcode: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  quantityInStock: z.number().int(),
  reorder_level: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  category: z.unknown(),
  supplier: z.unknown(),
  checkouts: z.array(z.unknown()),
  returnedOrders: z.array(z.unknown()),
  defects: z.array(z.unknown()),
  expiredItems: z.array(z.unknown()),
  restockItems: z.array(z.unknown())
}));