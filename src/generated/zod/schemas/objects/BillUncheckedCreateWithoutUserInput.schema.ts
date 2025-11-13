import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  customerId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateWithoutUserInput>;
export const BillUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
