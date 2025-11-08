import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const ReturnedOrderAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderAvgOrderByAggregateInput>;
export const ReturnedOrderAvgOrderByAggregateInputObjectZodSchema = makeSchema();
