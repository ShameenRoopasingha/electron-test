import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithoutUserInputObjectSchema as ExpiredItemUpdateWithoutUserInputObjectSchema } from './ExpiredItemUpdateWithoutUserInput.schema';
import { ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema as ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExpiredItemUpdateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateWithWhereUniqueWithoutUserInput>;
export const ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
