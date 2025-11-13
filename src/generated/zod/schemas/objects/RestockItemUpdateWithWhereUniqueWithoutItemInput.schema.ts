import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithoutItemInputObjectSchema as RestockItemUpdateWithoutItemInputObjectSchema } from './RestockItemUpdateWithoutItemInput.schema';
import { RestockItemUncheckedUpdateWithoutItemInputObjectSchema as RestockItemUncheckedUpdateWithoutItemInputObjectSchema } from './RestockItemUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RestockItemUpdateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const RestockItemUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateWithWhereUniqueWithoutItemInput>;
export const RestockItemUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
