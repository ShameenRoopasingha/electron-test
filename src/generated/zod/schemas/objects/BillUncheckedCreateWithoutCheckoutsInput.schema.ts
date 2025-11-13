import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateNestedManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  customerId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema).optional()
}).strict();
export const BillUncheckedCreateWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateWithoutCheckoutsInput>;
export const BillUncheckedCreateWithoutCheckoutsInputObjectZodSchema = makeSchema();
