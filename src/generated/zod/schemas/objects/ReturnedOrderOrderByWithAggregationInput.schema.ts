import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReturnedOrderCountOrderByAggregateInputObjectSchema as ReturnedOrderCountOrderByAggregateInputObjectSchema } from './ReturnedOrderCountOrderByAggregateInput.schema';
import { ReturnedOrderAvgOrderByAggregateInputObjectSchema as ReturnedOrderAvgOrderByAggregateInputObjectSchema } from './ReturnedOrderAvgOrderByAggregateInput.schema';
import { ReturnedOrderMaxOrderByAggregateInputObjectSchema as ReturnedOrderMaxOrderByAggregateInputObjectSchema } from './ReturnedOrderMaxOrderByAggregateInput.schema';
import { ReturnedOrderMinOrderByAggregateInputObjectSchema as ReturnedOrderMinOrderByAggregateInputObjectSchema } from './ReturnedOrderMinOrderByAggregateInput.schema';
import { ReturnedOrderSumOrderByAggregateInputObjectSchema as ReturnedOrderSumOrderByAggregateInputObjectSchema } from './ReturnedOrderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ReturnedOrderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReturnedOrderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReturnedOrderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReturnedOrderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReturnedOrderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReturnedOrderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReturnedOrderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderOrderByWithAggregationInput>;
export const ReturnedOrderOrderByWithAggregationInputObjectZodSchema = makeSchema();
