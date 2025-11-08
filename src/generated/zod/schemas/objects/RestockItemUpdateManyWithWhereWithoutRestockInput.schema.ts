import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemScalarWhereInputObjectSchema as RestockItemScalarWhereInputObjectSchema } from './RestockItemScalarWhereInput.schema';
import { RestockItemUpdateManyMutationInputObjectSchema as RestockItemUpdateManyMutationInputObjectSchema } from './RestockItemUpdateManyMutationInput.schema';
import { RestockItemUncheckedUpdateManyWithoutRestockInputObjectSchema as RestockItemUncheckedUpdateManyWithoutRestockInputObjectSchema } from './RestockItemUncheckedUpdateManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RestockItemUpdateManyMutationInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateManyWithoutRestockInputObjectSchema)])
}).strict();
export const RestockItemUpdateManyWithWhereWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateManyWithWhereWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateManyWithWhereWithoutRestockInput>;
export const RestockItemUpdateManyWithWhereWithoutRestockInputObjectZodSchema = makeSchema();
