import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RestockItemCountOrderByAggregateInputObjectSchema as RestockItemCountOrderByAggregateInputObjectSchema } from './RestockItemCountOrderByAggregateInput.schema';
import { RestockItemAvgOrderByAggregateInputObjectSchema as RestockItemAvgOrderByAggregateInputObjectSchema } from './RestockItemAvgOrderByAggregateInput.schema';
import { RestockItemMaxOrderByAggregateInputObjectSchema as RestockItemMaxOrderByAggregateInputObjectSchema } from './RestockItemMaxOrderByAggregateInput.schema';
import { RestockItemMinOrderByAggregateInputObjectSchema as RestockItemMinOrderByAggregateInputObjectSchema } from './RestockItemMinOrderByAggregateInput.schema';
import { RestockItemSumOrderByAggregateInputObjectSchema as RestockItemSumOrderByAggregateInputObjectSchema } from './RestockItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  restockId: SortOrderSchema.optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional(),
  _count: z.lazy(() => RestockItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RestockItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RestockItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RestockItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RestockItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RestockItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RestockItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemOrderByWithAggregationInput>;
export const RestockItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
