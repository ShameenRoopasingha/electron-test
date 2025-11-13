import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithoutItemInputObjectSchema as ExpiredItemUpdateWithoutItemInputObjectSchema } from './ExpiredItemUpdateWithoutItemInput.schema';
import { ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema as ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedUpdateWithoutItemInput.schema';
import { ExpiredItemCreateWithoutItemInputObjectSchema as ExpiredItemCreateWithoutItemInputObjectSchema } from './ExpiredItemCreateWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExpiredItemUpdateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpsertWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpsertWithWhereUniqueWithoutItemInput>;
export const ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
