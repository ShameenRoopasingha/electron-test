import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RestockCountOrderByAggregateInputObjectSchema as RestockCountOrderByAggregateInputObjectSchema } from './RestockCountOrderByAggregateInput.schema';
import { RestockAvgOrderByAggregateInputObjectSchema as RestockAvgOrderByAggregateInputObjectSchema } from './RestockAvgOrderByAggregateInput.schema';
import { RestockMaxOrderByAggregateInputObjectSchema as RestockMaxOrderByAggregateInputObjectSchema } from './RestockMaxOrderByAggregateInput.schema';
import { RestockMinOrderByAggregateInputObjectSchema as RestockMinOrderByAggregateInputObjectSchema } from './RestockMinOrderByAggregateInput.schema';
import { RestockSumOrderByAggregateInputObjectSchema as RestockSumOrderByAggregateInputObjectSchema } from './RestockSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RestockCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RestockAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RestockMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RestockMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RestockSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RestockOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RestockOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockOrderByWithAggregationInput>;
export const RestockOrderByWithAggregationInputObjectZodSchema = makeSchema();
