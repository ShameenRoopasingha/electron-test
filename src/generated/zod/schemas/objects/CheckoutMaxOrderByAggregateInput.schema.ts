import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  payedAmount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CheckoutMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CheckoutMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutMaxOrderByAggregateInput>;
export const CheckoutMaxOrderByAggregateInputObjectZodSchema = makeSchema();
