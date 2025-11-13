import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  manufacturer: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  barcode: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional(),
  sellingPrice: SortOrderSchema.optional(),
  quantityInStock: SortOrderSchema.optional(),
  reorder_level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemMaxOrderByAggregateInput>;
export const ItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
