import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema as RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema)
}).strict();
export const RestockUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RestockUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedCreateInput>;
export const RestockUncheckedCreateInputObjectZodSchema = makeSchema();
