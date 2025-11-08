import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithoutUserInputObjectSchema as ExpiredItemUpdateWithoutUserInputObjectSchema } from './ExpiredItemUpdateWithoutUserInput.schema';
import { ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema as ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedUpdateWithoutUserInput.schema';
import { ExpiredItemCreateWithoutUserInputObjectSchema as ExpiredItemCreateWithoutUserInputObjectSchema } from './ExpiredItemCreateWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExpiredItemUpdateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpsertWithWhereUniqueWithoutUserInput>;
export const ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
