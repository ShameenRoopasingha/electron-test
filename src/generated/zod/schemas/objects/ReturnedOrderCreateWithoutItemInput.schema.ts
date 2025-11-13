import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema as BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema } from './BillCreateNestedOneWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  bill: z.lazy(() => BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema).optional()
}).strict();
export const ReturnedOrderCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateWithoutItemInput>;
export const ReturnedOrderCreateWithoutItemInputObjectZodSchema = makeSchema();
