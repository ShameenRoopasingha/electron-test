import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBillsInputObjectSchema as UserCreateNestedOneWithoutBillsInputObjectSchema } from './UserCreateNestedOneWithoutBillsInput.schema';
import { CustomerCreateNestedOneWithoutBillsInputObjectSchema as CustomerCreateNestedOneWithoutBillsInputObjectSchema } from './CustomerCreateNestedOneWithoutBillsInput.schema';
import { ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBillsInputObjectSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBillsInputObjectSchema),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillCreateWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillCreateWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateWithoutCheckoutsInput>;
export const BillCreateWithoutCheckoutsInputObjectZodSchema = makeSchema();
