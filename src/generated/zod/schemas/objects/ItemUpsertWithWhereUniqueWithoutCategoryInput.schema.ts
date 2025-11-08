import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutCategoryInputObjectSchema as ItemUpdateWithoutCategoryInputObjectSchema } from './ItemUpdateWithoutCategoryInput.schema';
import { ItemUncheckedUpdateWithoutCategoryInputObjectSchema as ItemUncheckedUpdateWithoutCategoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCategoryInput.schema';
import { ItemCreateWithoutCategoryInputObjectSchema as ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema as ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ItemUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutCategoryInput>;
export const ItemUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
