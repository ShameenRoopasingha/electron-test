import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  customerId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema)
}).strict();
export const BillUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateInput>;
export const BillUncheckedCreateInputObjectZodSchema = makeSchema();
