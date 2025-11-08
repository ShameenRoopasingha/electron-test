import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedOneWithoutCheckoutsInputObjectSchema as BillCreateNestedOneWithoutCheckoutsInputObjectSchema } from './BillCreateNestedOneWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bill: z.lazy(() => BillCreateNestedOneWithoutCheckoutsInputObjectSchema)
}).strict();
export const CheckoutCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateWithoutItemInput>;
export const CheckoutCreateWithoutItemInputObjectZodSchema = makeSchema();
