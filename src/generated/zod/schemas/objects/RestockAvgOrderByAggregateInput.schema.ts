import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional()
}).strict();
export const RestockAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RestockAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockAvgOrderByAggregateInput>;
export const RestockAvgOrderByAggregateInputObjectZodSchema = makeSchema();
