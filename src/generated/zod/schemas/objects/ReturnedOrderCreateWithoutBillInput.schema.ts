import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema as ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema } from './ItemCreateNestedOneWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema).optional()
}).strict();
export const ReturnedOrderCreateWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateWithoutBillInput>;
export const ReturnedOrderCreateWithoutBillInputObjectZodSchema = makeSchema();
