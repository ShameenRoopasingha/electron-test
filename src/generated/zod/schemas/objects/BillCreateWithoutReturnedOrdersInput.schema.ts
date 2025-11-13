import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBillsInputObjectSchema as UserCreateNestedOneWithoutBillsInputObjectSchema } from './UserCreateNestedOneWithoutBillsInput.schema';
import { CustomerCreateNestedOneWithoutBillsInputObjectSchema as CustomerCreateNestedOneWithoutBillsInputObjectSchema } from './CustomerCreateNestedOneWithoutBillsInput.schema';
import { CheckoutCreateNestedManyWithoutBillInputObjectSchema as CheckoutCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillsInputObjectSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBillsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillCreateWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillCreateWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateWithoutReturnedOrdersInput>;
export const BillCreateWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
