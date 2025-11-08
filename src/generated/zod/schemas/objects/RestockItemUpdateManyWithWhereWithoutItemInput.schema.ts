import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemScalarWhereInputObjectSchema as RestockItemScalarWhereInputObjectSchema } from './RestockItemScalarWhereInput.schema';
import { RestockItemUpdateManyMutationInputObjectSchema as RestockItemUpdateManyMutationInputObjectSchema } from './RestockItemUpdateManyMutationInput.schema';
import { RestockItemUncheckedUpdateManyWithoutItemInputObjectSchema as RestockItemUncheckedUpdateManyWithoutItemInputObjectSchema } from './RestockItemUncheckedUpdateManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RestockItemUpdateManyMutationInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const RestockItemUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateManyWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateManyWithWhereWithoutItemInput>;
export const RestockItemUpdateManyWithWhereWithoutItemInputObjectZodSchema = makeSchema();
