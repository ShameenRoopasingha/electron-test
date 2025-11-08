import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const RestockCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RestockCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCountOrderByAggregateInput>;
export const RestockCountOrderByAggregateInputObjectZodSchema = makeSchema();
