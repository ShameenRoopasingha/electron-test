import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SupplierCountOrderByAggregateInputObjectSchema as SupplierCountOrderByAggregateInputObjectSchema } from './SupplierCountOrderByAggregateInput.schema';
import { SupplierAvgOrderByAggregateInputObjectSchema as SupplierAvgOrderByAggregateInputObjectSchema } from './SupplierAvgOrderByAggregateInput.schema';
import { SupplierMaxOrderByAggregateInputObjectSchema as SupplierMaxOrderByAggregateInputObjectSchema } from './SupplierMaxOrderByAggregateInput.schema';
import { SupplierMinOrderByAggregateInputObjectSchema as SupplierMinOrderByAggregateInputObjectSchema } from './SupplierMinOrderByAggregateInput.schema';
import { SupplierSumOrderByAggregateInputObjectSchema as SupplierSumOrderByAggregateInputObjectSchema } from './SupplierSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SupplierCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SupplierAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SupplierMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SupplierMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SupplierSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SupplierOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SupplierOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierOrderByWithAggregationInput>;
export const SupplierOrderByWithAggregationInputObjectZodSchema = makeSchema();
