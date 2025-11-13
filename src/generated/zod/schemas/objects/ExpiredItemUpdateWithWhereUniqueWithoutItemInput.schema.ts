import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithoutItemInputObjectSchema as ExpiredItemUpdateWithoutItemInputObjectSchema } from './ExpiredItemUpdateWithoutItemInput.schema';
import { ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema as ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExpiredItemUpdateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateWithWhereUniqueWithoutItemInput>;
export const ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
