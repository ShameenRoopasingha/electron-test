import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional(),
  sellingPrice: SortOrderSchema.optional(),
  quantityInStock: SortOrderSchema.optional(),
  reorder_level: SortOrderSchema.optional()
}).strict();
export const ItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemSumOrderByAggregateInput>;
export const ItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
