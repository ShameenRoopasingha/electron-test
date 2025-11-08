import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema as RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockUncheckedCreateWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockUncheckedCreateWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedCreateWithoutSupplierInput>;
export const RestockUncheckedCreateWithoutSupplierInputObjectZodSchema = makeSchema();
