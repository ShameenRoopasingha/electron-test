import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBillsInputObjectSchema as UserCreateNestedOneWithoutBillsInputObjectSchema } from './UserCreateNestedOneWithoutBillsInput.schema';
import { CheckoutCreateNestedManyWithoutBillInputObjectSchema as CheckoutCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutBillInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillCreateWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillCreateWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateWithoutCustomerInput>;
export const BillCreateWithoutCustomerInputObjectZodSchema = makeSchema();
