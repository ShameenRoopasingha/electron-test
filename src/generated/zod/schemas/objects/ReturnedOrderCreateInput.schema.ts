import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema as BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema } from './BillCreateNestedOneWithoutReturnedOrdersInput.schema';
import { ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema as ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema } from './ItemCreateNestedOneWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  bill: z.lazy(() => BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema).optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema).optional()
}).strict();
export const ReturnedOrderCreateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateInput>;
export const ReturnedOrderCreateInputObjectZodSchema = makeSchema();
