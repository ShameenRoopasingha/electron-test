import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BillCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BillCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCountOrderByAggregateInput>;
export const BillCountOrderByAggregateInputObjectZodSchema = makeSchema();
