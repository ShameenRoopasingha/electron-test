import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutCheckoutsInputObjectSchema as ItemCreateNestedOneWithoutCheckoutsInputObjectSchema } from './ItemCreateNestedOneWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutCheckoutsInputObjectSchema)
}).strict();
export const CheckoutCreateWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutCreateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateWithoutBillInput>;
export const CheckoutCreateWithoutBillInputObjectZodSchema = makeSchema();
