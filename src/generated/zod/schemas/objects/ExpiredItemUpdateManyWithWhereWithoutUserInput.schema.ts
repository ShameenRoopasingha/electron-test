import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemScalarWhereInputObjectSchema as ExpiredItemScalarWhereInputObjectSchema } from './ExpiredItemScalarWhereInput.schema';
import { ExpiredItemUpdateManyMutationInputObjectSchema as ExpiredItemUpdateManyMutationInputObjectSchema } from './ExpiredItemUpdateManyMutationInput.schema';
import { ExpiredItemUncheckedUpdateManyWithoutUserInputObjectSchema as ExpiredItemUncheckedUpdateManyWithoutUserInputObjectSchema } from './ExpiredItemUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExpiredItemUpdateManyMutationInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ExpiredItemUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateManyWithWhereWithoutUserInput>;
export const ExpiredItemUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
