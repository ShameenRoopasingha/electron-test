import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedOneWithoutCheckoutsInputObjectSchema as BillCreateNestedOneWithoutCheckoutsInputObjectSchema } from './BillCreateNestedOneWithoutCheckoutsInput.schema';
import { ItemCreateNestedOneWithoutCheckoutsInputObjectSchema as ItemCreateNestedOneWithoutCheckoutsInputObjectSchema } from './ItemCreateNestedOneWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  bill: z.lazy(() => BillCreateNestedOneWithoutCheckoutsInputObjectSchema),
  item: z.lazy(() => ItemCreateNestedOneWithoutCheckoutsInputObjectSchema)
}).strict();
export const CheckoutCreateInputObjectSchema: z.ZodType<Prisma.CheckoutCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateInput>;
export const CheckoutCreateInputObjectZodSchema = makeSchema();
