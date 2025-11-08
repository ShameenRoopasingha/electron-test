import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerCreateNestedOneWithoutBillsInputObjectSchema as CustomerCreateNestedOneWithoutBillsInputObjectSchema } from './CustomerCreateNestedOneWithoutBillsInput.schema';
import { CheckoutCreateNestedManyWithoutBillInputObjectSchema as CheckoutCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBillsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutBillInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BillCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateWithoutUserInput>;
export const BillCreateWithoutUserInputObjectZodSchema = makeSchema();
