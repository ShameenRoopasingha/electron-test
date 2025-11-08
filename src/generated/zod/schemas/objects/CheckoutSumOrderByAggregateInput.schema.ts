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
export const CheckoutSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CheckoutSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutSumOrderByAggregateInput>;
export const CheckoutSumOrderByAggregateInputObjectZodSchema = makeSchema();
