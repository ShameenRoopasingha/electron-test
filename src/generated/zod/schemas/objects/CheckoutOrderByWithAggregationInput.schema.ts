import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CheckoutCountOrderByAggregateInputObjectSchema as CheckoutCountOrderByAggregateInputObjectSchema } from './CheckoutCountOrderByAggregateInput.schema';
import { CheckoutAvgOrderByAggregateInputObjectSchema as CheckoutAvgOrderByAggregateInputObjectSchema } from './CheckoutAvgOrderByAggregateInput.schema';
import { CheckoutMaxOrderByAggregateInputObjectSchema as CheckoutMaxOrderByAggregateInputObjectSchema } from './CheckoutMaxOrderByAggregateInput.schema';
import { CheckoutMinOrderByAggregateInputObjectSchema as CheckoutMinOrderByAggregateInputObjectSchema } from './CheckoutMinOrderByAggregateInput.schema';
import { CheckoutSumOrderByAggregateInputObjectSchema as CheckoutSumOrderByAggregateInputObjectSchema } from './CheckoutSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  payedAmount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CheckoutCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CheckoutAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CheckoutMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CheckoutMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CheckoutSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CheckoutOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CheckoutOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutOrderByWithAggregationInput>;
export const CheckoutOrderByWithAggregationInputObjectZodSchema = makeSchema();
