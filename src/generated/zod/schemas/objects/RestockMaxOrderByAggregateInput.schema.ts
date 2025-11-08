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
export const RestockMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RestockMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockMaxOrderByAggregateInput>;
export const RestockMaxOrderByAggregateInputObjectZodSchema = makeSchema();
