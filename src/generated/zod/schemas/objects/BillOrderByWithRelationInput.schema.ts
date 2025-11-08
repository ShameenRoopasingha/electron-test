import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CustomerOrderByWithRelationInputObjectSchema as CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { CheckoutOrderByRelationAggregateInputObjectSchema as CheckoutOrderByRelationAggregateInputObjectSchema } from './CheckoutOrderByRelationAggregateInput.schema';
import { ReturnedOrderOrderByRelationAggregateInputObjectSchema as ReturnedOrderOrderByRelationAggregateInputObjectSchema } from './ReturnedOrderOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputObjectSchema).optional(),
  checkouts: z.lazy(() => CheckoutOrderByRelationAggregateInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BillOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BillOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BillOrderByWithRelationInput>;
export const BillOrderByWithRelationInputObjectZodSchema = makeSchema();
