import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillUncheckedCreateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateWithoutCustomerInput>;
export const BillUncheckedCreateWithoutCustomerInputObjectZodSchema = makeSchema();
