import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BusinessDetailsCountOrderByAggregateInputObjectSchema as BusinessDetailsCountOrderByAggregateInputObjectSchema } from './BusinessDetailsCountOrderByAggregateInput.schema';
import { BusinessDetailsAvgOrderByAggregateInputObjectSchema as BusinessDetailsAvgOrderByAggregateInputObjectSchema } from './BusinessDetailsAvgOrderByAggregateInput.schema';
import { BusinessDetailsMaxOrderByAggregateInputObjectSchema as BusinessDetailsMaxOrderByAggregateInputObjectSchema } from './BusinessDetailsMaxOrderByAggregateInput.schema';
import { BusinessDetailsMinOrderByAggregateInputObjectSchema as BusinessDetailsMinOrderByAggregateInputObjectSchema } from './BusinessDetailsMinOrderByAggregateInput.schema';
import { BusinessDetailsSumOrderByAggregateInputObjectSchema as BusinessDetailsSumOrderByAggregateInputObjectSchema } from './BusinessDetailsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  registrationNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  _count: z.lazy(() => BusinessDetailsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BusinessDetailsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BusinessDetailsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BusinessDetailsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BusinessDetailsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BusinessDetailsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BusinessDetailsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsOrderByWithAggregationInput>;
export const BusinessDetailsOrderByWithAggregationInputObjectZodSchema = makeSchema();
