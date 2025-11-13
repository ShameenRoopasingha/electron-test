import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerCountOrderByAggregateInputObjectSchema as CustomerCountOrderByAggregateInputObjectSchema } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerAvgOrderByAggregateInputObjectSchema as CustomerAvgOrderByAggregateInputObjectSchema } from './CustomerAvgOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputObjectSchema as CustomerMaxOrderByAggregateInputObjectSchema } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputObjectSchema as CustomerMinOrderByAggregateInputObjectSchema } from './CustomerMinOrderByAggregateInput.schema';
import { CustomerSumOrderByAggregateInputObjectSchema as CustomerSumOrderByAggregateInputObjectSchema } from './CustomerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CustomerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CustomerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithAggregationInput>;
export const CustomerOrderByWithAggregationInputObjectZodSchema = makeSchema();
