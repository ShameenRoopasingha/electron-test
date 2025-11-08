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
export const ItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemAvgOrderByAggregateInput>;
export const ItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
