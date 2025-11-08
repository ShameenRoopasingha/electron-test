import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithoutItemInputObjectSchema as RestockItemUpdateWithoutItemInputObjectSchema } from './RestockItemUpdateWithoutItemInput.schema';
import { RestockItemUncheckedUpdateWithoutItemInputObjectSchema as RestockItemUncheckedUpdateWithoutItemInputObjectSchema } from './RestockItemUncheckedUpdateWithoutItemInput.schema';
import { RestockItemCreateWithoutItemInputObjectSchema as RestockItemCreateWithoutItemInputObjectSchema } from './RestockItemCreateWithoutItemInput.schema';
import { RestockItemUncheckedCreateWithoutItemInputObjectSchema as RestockItemUncheckedCreateWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RestockItemUpdateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const RestockItemUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemUpsertWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpsertWithWhereUniqueWithoutItemInput>;
export const RestockItemUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
