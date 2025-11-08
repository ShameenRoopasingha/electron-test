import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CustomerArgsObjectSchema as CustomerArgsObjectSchema } from './CustomerArgs.schema';
import { CheckoutFindManySchema as CheckoutFindManySchema } from '../findManyCheckout.schema';
import { ReturnedOrderFindManySchema as ReturnedOrderFindManySchema } from '../findManyReturnedOrder.schema';
import { BillCountOutputTypeArgsObjectSchema as BillCountOutputTypeArgsObjectSchema } from './BillCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  totalAmount: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  paymentStatus: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  customer: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  checkouts: z.union([z.boolean(), z.lazy(() => CheckoutFindManySchema)]).optional(),
  returnedOrders: z.union([z.boolean(), z.lazy(() => ReturnedOrderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BillCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BillSelectObjectSchema: z.ZodType<Prisma.BillSelect> = makeSchema() as unknown as z.ZodType<Prisma.BillSelect>;
export const BillSelectObjectZodSchema = makeSchema();
