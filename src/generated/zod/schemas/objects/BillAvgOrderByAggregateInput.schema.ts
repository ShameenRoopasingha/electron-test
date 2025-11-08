import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional()
}).strict();
export const BillAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BillAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillAvgOrderByAggregateInput>;
export const BillAvgOrderByAggregateInputObjectZodSchema = makeSchema();
