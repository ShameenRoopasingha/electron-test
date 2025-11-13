import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateNestedManyWithoutRestockInputObjectSchema as RestockItemCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => RestockItemCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockCreateWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockCreateWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateWithoutSupplierInput>;
export const RestockCreateWithoutSupplierInputObjectZodSchema = makeSchema();
