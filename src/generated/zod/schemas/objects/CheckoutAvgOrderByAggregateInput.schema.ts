import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  payedAmount: SortOrderSchema.optional()
}).strict();
export const CheckoutAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CheckoutAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutAvgOrderByAggregateInput>;
export const CheckoutAvgOrderByAggregateInputObjectZodSchema = makeSchema();
