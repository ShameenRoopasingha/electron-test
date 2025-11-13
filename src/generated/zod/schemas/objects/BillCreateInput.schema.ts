import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBillsInputObjectSchema as UserCreateNestedOneWithoutBillsInputObjectSchema } from './UserCreateNestedOneWithoutBillsInput.schema';
import { CustomerCreateNestedOneWithoutBillsInputObjectSchema as CustomerCreateNestedOneWithoutBillsInputObjectSchema } from './CustomerCreateNestedOneWithoutBillsInput.schema';
import { CheckoutCreateNestedManyWithoutBillInputObjectSchema as CheckoutCreateNestedManyWithoutBillInputObjectSchema } from './CheckoutCreateNestedManyWithoutBillInput.schema';
import { ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillsInputObjectSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBillsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutBillInputObjectSchema),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema)
}).strict();
export const BillCreateInputObjectSchema: z.ZodType<Prisma.BillCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateInput>;
export const BillCreateInputObjectZodSchema = makeSchema();
