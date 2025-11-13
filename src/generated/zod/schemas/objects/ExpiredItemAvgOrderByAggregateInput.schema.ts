import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  disposedBy: SortOrderSchema.optional()
}).strict();
export const ExpiredItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExpiredItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemAvgOrderByAggregateInput>;
export const ExpiredItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
