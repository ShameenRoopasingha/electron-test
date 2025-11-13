import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  customerId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateWithoutReturnedOrdersInput>;
export const BillUncheckedCreateWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
