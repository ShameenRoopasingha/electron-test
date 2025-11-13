import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ReturnedOrderMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderMaxOrderByAggregateInput>;
export const ReturnedOrderMaxOrderByAggregateInputObjectZodSchema = makeSchema();
