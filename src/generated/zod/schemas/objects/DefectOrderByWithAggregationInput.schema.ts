import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DefectCountOrderByAggregateInputObjectSchema as DefectCountOrderByAggregateInputObjectSchema } from './DefectCountOrderByAggregateInput.schema';
import { DefectAvgOrderByAggregateInputObjectSchema as DefectAvgOrderByAggregateInputObjectSchema } from './DefectAvgOrderByAggregateInput.schema';
import { DefectMaxOrderByAggregateInputObjectSchema as DefectMaxOrderByAggregateInputObjectSchema } from './DefectMaxOrderByAggregateInput.schema';
import { DefectMinOrderByAggregateInputObjectSchema as DefectMinOrderByAggregateInputObjectSchema } from './DefectMinOrderByAggregateInput.schema';
import { DefectSumOrderByAggregateInputObjectSchema as DefectSumOrderByAggregateInputObjectSchema } from './DefectSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  reportedBy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DefectCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DefectAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DefectMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DefectMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DefectSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DefectOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DefectOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectOrderByWithAggregationInput>;
export const DefectOrderByWithAggregationInputObjectZodSchema = makeSchema();
