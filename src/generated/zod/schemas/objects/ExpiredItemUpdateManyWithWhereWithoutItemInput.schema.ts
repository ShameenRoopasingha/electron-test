import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemScalarWhereInputObjectSchema as ExpiredItemScalarWhereInputObjectSchema } from './ExpiredItemScalarWhereInput.schema';
import { ExpiredItemUpdateManyMutationInputObjectSchema as ExpiredItemUpdateManyMutationInputObjectSchema } from './ExpiredItemUpdateManyMutationInput.schema';
import { ExpiredItemUncheckedUpdateManyWithoutItemInputObjectSchema as ExpiredItemUncheckedUpdateManyWithoutItemInputObjectSchema } from './ExpiredItemUncheckedUpdateManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExpiredItemUpdateManyMutationInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const ExpiredItemUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateManyWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateManyWithWhereWithoutItemInput>;
export const ExpiredItemUpdateManyWithWhereWithoutItemInputObjectZodSchema = makeSchema();
