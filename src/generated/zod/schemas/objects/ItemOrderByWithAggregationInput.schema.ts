import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemCountOrderByAggregateInputObjectSchema as ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemAvgOrderByAggregateInputObjectSchema as ItemAvgOrderByAggregateInputObjectSchema } from './ItemAvgOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema as ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema as ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';
import { ItemSumOrderByAggregateInputObjectSchema as ItemSumOrderByAggregateInputObjectSchema } from './ItemSumOrderByAggregateInput.schema'

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
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemOrderByWithAggregationInput>;
export const ItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
