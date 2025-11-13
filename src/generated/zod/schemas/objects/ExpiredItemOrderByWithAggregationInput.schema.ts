import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExpiredItemCountOrderByAggregateInputObjectSchema as ExpiredItemCountOrderByAggregateInputObjectSchema } from './ExpiredItemCountOrderByAggregateInput.schema';
import { ExpiredItemAvgOrderByAggregateInputObjectSchema as ExpiredItemAvgOrderByAggregateInputObjectSchema } from './ExpiredItemAvgOrderByAggregateInput.schema';
import { ExpiredItemMaxOrderByAggregateInputObjectSchema as ExpiredItemMaxOrderByAggregateInputObjectSchema } from './ExpiredItemMaxOrderByAggregateInput.schema';
import { ExpiredItemMinOrderByAggregateInputObjectSchema as ExpiredItemMinOrderByAggregateInputObjectSchema } from './ExpiredItemMinOrderByAggregateInput.schema';
import { ExpiredItemSumOrderByAggregateInputObjectSchema as ExpiredItemSumOrderByAggregateInputObjectSchema } from './ExpiredItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  expirationDate: SortOrderSchema.optional(),
  disposedBy: SortOrderSchema.optional(),
  reason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ExpiredItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ExpiredItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ExpiredItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ExpiredItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ExpiredItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ExpiredItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ExpiredItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemOrderByWithAggregationInput>;
export const ExpiredItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
