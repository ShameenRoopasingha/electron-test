import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BillCountOrderByAggregateInputObjectSchema as BillCountOrderByAggregateInputObjectSchema } from './BillCountOrderByAggregateInput.schema';
import { BillAvgOrderByAggregateInputObjectSchema as BillAvgOrderByAggregateInputObjectSchema } from './BillAvgOrderByAggregateInput.schema';
import { BillMaxOrderByAggregateInputObjectSchema as BillMaxOrderByAggregateInputObjectSchema } from './BillMaxOrderByAggregateInput.schema';
import { BillMinOrderByAggregateInputObjectSchema as BillMinOrderByAggregateInputObjectSchema } from './BillMinOrderByAggregateInput.schema';
import { BillSumOrderByAggregateInputObjectSchema as BillSumOrderByAggregateInputObjectSchema } from './BillSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BillCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BillAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BillMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BillMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BillSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BillOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BillOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BillOrderByWithAggregationInput>;
export const BillOrderByWithAggregationInputObjectZodSchema = makeSchema();
