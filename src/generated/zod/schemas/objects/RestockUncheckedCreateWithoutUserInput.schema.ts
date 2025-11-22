import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema as RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedCreateWithoutUserInput>;
export const RestockUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
